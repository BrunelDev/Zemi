import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";

export function TopUp() {
  return (
    <ImageBackground
      source={require("@/assets/images/topUpBg.jpg")}
      className="rounded-xl w-full h-fit overflow-hidden"
    >
      <View className="w-full h-[80px] rounded-lg p-3 flex flex-row justify-between">
        <View className="space-y-2">
          <Text className="text-gray-100 font-light">Portefeuille</Text>
          <Text className="text-gray-800 text-xl">0 F</Text>
        </View>
        <TouchableOpacity
          className="absolute h-fit px-3 py-2 right-3 top-5 bg-white rounded-lg flex flex-row"
          onPress={() => {
            router.push("../Recharger portefeuille");
          }}
        >
          <MaterialIcons
            name="add"
            size={20}
            color="black"
            className="-translate-y-10"
          />

          <Text>Top-up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
