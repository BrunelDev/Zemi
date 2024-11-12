import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Send } from "lucide-react-native";
import { router } from "expo-router";

export default function AddLocation() {
  return (
    <View className="w-full h-full flex justify-center items-center bg-white">
      <ImageBackground
        className="w-full h-[250px] "
        source={require("@/assets/images/bg.png")}
        resizeMode="cover"
      ></ImageBackground>
      <Text className="text-bold text-2xl text-center mt-14 mb-7">
        Salut ! Enchanté de faire ta connaissance !
      </Text>
      <Text className="text-sm text-gray-400 text-center">
        Choisissez votre emplacement pour commencer à trouver des restaurants
        autour de vous.
      </Text>
      <TouchableOpacity
        onPress={() => {
          router.push("/mapSelection");
        }}
        activeOpacity={0.7}
        className="border border-primary rounded-lg py-3 w-[85%] my-8"
      >
        <Send
          strokeWidth={3}
          className="absolute top-2 left-5"
          color={"#ffc107"}
        />
        <Text className="text-primary text-center">
          Utiliser la localisation actulle
        </Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.7} className="border-b border-red-300">
        <Text className="text-red-300">Sélectionner manuellement</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
