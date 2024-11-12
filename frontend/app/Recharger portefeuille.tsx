import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { styled } from "nativewind";
import { Button } from "@/components/button";
import { router } from "expo-router";
const GridView = styled(View);
export default function TopUp() {
  const [amount, setAmount] = useState<number | string>(200);
  return (
    <ScrollView className="bg-white">
      <ImageBackground
        source={require("@/assets/images/topUpBg.jpg")}
        className="px-3 py-6 space-y-6"
      >
        <View className="flex flex-row justify-between space-x-2">
          <View className="flex w-8 h-8 justify-center items-center rounded-full bg-[#e5f9ec72]">
            <Ionicons name="add-circle-outline" size={25} color="black" />
          </View>
          <View className="flex flex-row justify-between pb-6 border-b border-[#f9fafb39]">
            <Text className="text-green-100 text-wrap w-[70%]">
              Aucune méthode de recharge ajoutée
            </Text>
            <TouchableOpacity
              activeOpacity={0.7}
              className=" bg-white rounded-full px-2 flex justify-center items-center"
            >
              <Text className="text-blue-500">Ajouter</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex flex-row space-x-4">
          <View className="flex w-8 h-8 justify-center items-center rounded-full bg-[#e5f9ec72]">
            <Ionicons name="add-circle-outline" size={25} color="black" />
          </View>
          <View className="flex flex-col justify-between">
            <Text className="text-wrap text-green-100">Portfeuile Zemi</Text>
            <Text className="text-wrap text-green-100">
              Solde Actuel : 10000F
            </Text>
          </View>
        </View>
      </ImageBackground>
      <View className="h-full w-full px-4">
        <View className="mt-8 mb-4 flex flex-row justify-between">
          <Text className="font-semibold text-2xl">Montant à recharger</Text>
          <Text>i</Text>
        </View>
        <TextInput
          value={`${amount}`}
          onChange={(e) => {
            setAmount(e.nativeEvent.text);
          }}
          inputMode="numeric"
          placeholderTextColor={"#C8C7CC"}
          placeholder="Entrez un montant"
          className="w-full h-12 rounded-md r pl-3 border border-gray-500 font-light text-base"
        />
        <GridView className="flex-row flex-wrap justify-between gap-1 mt-8">
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              setAmount(500);
            }}
            className="h-fit w-fit px-5 py-3 rounded-full border border-gray-500 justify-center items-center"
          >
            <Text className="text-gray-400 text-lg">500F</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              setAmount(1000);
            }}
            className="h-fit w-fit px-5 py-3 rounded-full border border-gray-500 justify-center items-center"
          >
            <Text className="text-gray-400 text-lg">1000F</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              setAmount(2000);
            }}
            className="h-fit w-fit px-5 py-3 rounded-full border border-gray-500 justify-center items-center"
          >
            <Text className="text-gray-400 text-lg">2000F</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              setAmount(5000);
            }}
            className="h-fit w-fit px-5 py-3 rounded-full border border-gray-500 justify-center items-center"
          >
            <Text className="text-gray-400 text-lg">5000F</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              setAmount(10000);
            }}
            className="h-fit w-fit px-5 py-3 rounded-full border border-gray-500 justify-center items-center"
          >
            <Text className="text-gray-400 text-lg">10000F</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              setAmount(15000);
            }}
            className="h-fit w-fit px-5 py-3 rounded-full border border-gray-500 justify-center items-center"
          >
            <Text className="text-gray-400 text-lg">15000F</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              setAmount(20000);
            }}
            className="h-fit w-fit px-5 py-3 rounded-full border border-gray-500 justify-center items-center"
          >
            <Text className="text-gray-400 text-lg">20000F</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              setAmount(25000);
            }}
            className="h-fit w-fit px-5 py-3 rounded-full border border-gray-500 justify-center items-center"
          >
            <Text className="text-gray-400 text-lg">25000F</Text>
          </TouchableOpacity>
        </GridView>
        <Button
          handlePress={() => {
            router.push("../test");
          }}
          title="Recharger"
          disabled={
            typeof amount !== "number" ||
            (typeof amount !== "number" && amount >= 200)
          }
        />
      </View>
    </ScrollView>
  );
}
