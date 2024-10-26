import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar,
  Dimensions,
  ImageBackground,
} from "react-native";
import React from "react";
import { Avatar } from "@/components/avatar";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Notifications } from "@/components/notifications";
import { Carousel } from "@/components/carousel";
import { TopUp } from "@/components/topUp";
export default function Accueil() {
  const DEVICE_WIDTH = Dimensions.get("window").width;
  const IMAGES = [
    require("@/assets/images/bg.png"),
    require("@/assets/images/bg.png"),
    require("@/assets/images/bg.png"),
  ];
  return (
    <View className="bg-white px-4">
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <TopBar />
        <ScrollView className="h-screen">
          <View className="">
            <Carousel />
          </View>

          <View className="mt-2 mb-10"></View>
          <TopUp />

          <Text className="my-8 font-semibold">Suggestions</Text>
          <View className="flex flex-row flex-wrap justify-between">
            {/*TODO : faire -8px sur la largeur et la hauteur de chaque icone*/}
            <TouchableOpacity
              activeOpacity={0.7}
              className="rounded-3xl bg-gray-200 w-[68px] h-[63px] flex justify-center items-center mb-3 mr-1"
            >
              <Image
                source={require("@/assets/images/taxi.png")}
                height={67}
                width={38}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              className="rounded-3xl bg-gray-200 w-[68px] h-[63px] flex justify-center items-center"
            >
              <Image
                source={require("@/assets/images/moto.png")}
                height={67}
                width={38}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              className="rounded-3xl bg-gray-200 w-[68px] h-[63px] flex justify-center items-center"
            >
              <Image
                source={require("@/assets/images/tricycle.png")}
                height={67}
                width={38}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              className="rounded-3xl bg-gray-200 w-[68px] h-[63px] flex justify-center items-center"
            >
              <Image
                source={require("@/assets/images/boite.png")}
                height={67}
                width={38}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              className="rounded-3xl bg-gray-200 w-[68px] h-[63px] flex justify-center items-center"
            >
              <Image
                source={require("@/assets/images/assistance.png")}
                height={67}
                width={38}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const TopBar = () => {
  return (
    <View className="bg-[#ffffff98] h-[50px] flex flex-row justify-between px-3">
      <Avatar image="" />
      <Text>Logo</Text>
      <View className="w-fit h-fit inline-block">
        <Notifications />
      </View>
    </View>
  );
};
