import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

export function Button({
  className = "b",
  title,
  handlePress,
  disabled = false,
}: {
  title: string;
  handlePress: () => void;
  disabled: boolean;
  className: string;
}) {
  return (
    <TouchableOpacity
      onPress={disabled ? () => {} : handlePress}
      activeOpacity={disabled ? 1 : 0.7}
      className={`w-full ${
        disabled ? "bg-gray-100 " : "bg-primary"
      }  h-12 rounded-lg flex justify-center items-center mt-auto ${
        className ? className : ""
      }`}
    >
      <Text className={`${disabled ? "text-gray-300" : "text-white"} text-lg`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
