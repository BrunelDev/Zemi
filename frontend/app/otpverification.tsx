import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { OtpInput } from "react-native-otp-entry";
import { ChevronLeft } from "lucide-react-native";
import { router } from "expo-router";
import { Button } from "@/components/button";

export default function OtpVerification() {
  return (
    <View className="bg-white h-screen">
      <View className="bg-primary w-full h-[25vh] pt-10 mb-20">
        <TouchableOpacity
          onPress={() => {
            router.back();
          }}
        >
          <ChevronLeft color={"white"} size={35} />
        </TouchableOpacity>
        <View className="pl-5">
          <Text className="text-white font-semibold text-2xl my-4">
            Vérification de votre numéro
          </Text>
          <Text className="text-white my-4">
            Veuillez entrer votre code OTP
          </Text>
        </View>
      </View>
      <View className="w-full px-10">
        <OtpInput
          numberOfDigits={6}
          focusColor="#FFC107"
          focusStickBlinkingDuration={500}
          onTextChange={(text) => console.log(text)}
          onFilled={(text) => console.log(`OTP is ${text}`)}
          textInputProps={{
            accessibilityLabel: "One-Time Password",
          }}
        />
      </View>

      <View className="w-full px-10 mt-20">
        <Button
          title="Vérifier"
          handlePress={() => {
            router.push("/addLocation");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
