import { Tabs } from "expo-router";
import { View, Text, Platform } from "react-native";
import React from "react";

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
export default function TabLayout() {
  let isAndroid = Platform.OS === "android";
  const colorScheme = useColorScheme();
  const TabBarIcon = ({
    focused,
    icon,
    name,
  }: {
    focused: boolean;
    icon: React.JSX.Element;
    name: string;
  }) => {
    return (
      <View className="flex justify-center items-center mt-5">
        <Text className={`${focused ? "text-primary" : "text-gray-400"}`}>
          {icon}
        </Text>
        <Text
          className={`${
            focused ? "text-primary" : "text-gray-400"
          } text-xs font-light`}
        >
          {name}
        </Text>
      </View>
    );
  };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#2051E5",
        tabBarInactiveTintColor: "#445668",
        tabBarStyle: {
          //backgroundColor: "#161622",
          borderTopWidth: 1,
          borderTopColor: "#EEF0F3",
          height: isAndroid ? 52 : 80,
        },
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="Accueil"
        options={{
          title: "Accueil",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={"Accueil"}
              icon={
                <MaterialCommunityIcons
                  name="home-variant"
                  size={24}
                  color={`${focused ? "#ffc107" : "text-red-600"}`}
                />
              }
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Aide"
        options={{
          title: "Aide",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={"Aide"}
              icon={
                <Entypo
                  name="help-with-circle"
                  size={24}
                  color={`${focused ? "#ffc107" : "text-red-600"}`}
                />
              }
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Adresses"
        options={{
          title: "Adresses",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={"Adresses"}
              icon={
                <FontAwesome6
                  name="location-crosshairs"
                  size={24}
                  color={`${focused ? "#ffc107" : "text-red-600"}`}
                />
              }
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Activités"
        options={{
          title: "Activités",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={"Activités"}
              icon={
                <MaterialIcons
                  name="schedule"
                  size={24}
                  color={`${focused ? "#ffc107" : "text-red-600"}`}
                />
              }
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="compte"
        options={{
          title: "Compte",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={"Compte"}
              icon={
                <MaterialCommunityIcons
                  name="account-circle-outline"
                  size={24}
                  color={`${focused ? "#ffc107" : "text-red-600"}`}
                />
              }
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}
