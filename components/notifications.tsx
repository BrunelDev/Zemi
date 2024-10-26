import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Bell } from "lucide-react-native";
import { router } from "expo-router";

export function Notifications() {
  return (
    <TouchableOpacity
      onPress={() => {
        router.push("../Notifications");
      }}
      activeOpacity={0.7}
      className="p-2 bg-gray-200 rounded-full"
    >
      <View className="absolute bg-red-600 rounded-full right-1 top-1 z-50">
        <Text className="h-4 w-4 text-xs text-center text-white">9</Text>
      </View>
      <Bell className="overflow-hidden text-gray-800" />
    </TouchableOpacity>
  );
}
