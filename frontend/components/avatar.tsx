import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { router } from "expo-router";

export function Avatar({
  image,
  iconSize,
}: {
  image: string;
  iconSize: number | undefined;
}) {
  return (
    <TouchableOpacity
      onPress={() => {
        router.push("/compte");
      }}
    >
      {image ? (
        <Image
          source={require("@/assets/images/userIcon.png")}
          width={10}
          height={10}
          ClassName="bg-gray-100"
          resizeMode="contain"
        />
      ) : (
        <FontAwesome
          name="user-circle"
          size={iconSize ? iconSize : 30}
          color="gray"
        />
      )}
    </TouchableOpacity>
  );
}
