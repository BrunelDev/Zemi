import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import React from "react";
import { Authentification } from "@/components/authentification";

export default function index() {
  return (
    <ImageBackground
      source={require("@/assets/images/splash.png")}
      resizeMode="cover"
    >
      <View className="h-screen w-full flex justify-center items-center px-6">
        <Authentification />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({});
