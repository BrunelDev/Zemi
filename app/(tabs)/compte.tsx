import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Avatar } from "@/components/avatar";
import Octicons from "@expo/vector-icons/Octicons";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { TopUp } from "@/components/topUp";
export default function Compte() {
  return (
    <View className="px-4 bg-white h-screen">
      <SafeAreaView>
        <Text className="font-semibold text-lg">Compte</Text>
        <View className="mt-14 flex flex-row justify-between">
          <View className="flex flex-row w-fit space-x-3">
            <Avatar image="" iconSize={84} />
            <View>
              <Text className="font-semibold text-xl">John Doe</Text>
              <View className="bg-primary px-2 rounded-full w-[80px] flex flex-row space-x-1">
                <View className="translate-y-[3px]">
                  <Octicons name="star-fill" size={20} color="white" />
                </View>

                <Text className="text-center font-semibold text-lg text-white">
                  0.0
                </Text>
              </View>
            </View>
          </View>
          <View className="translate-y-2">
            <Feather name="edit-3" size={24} color="#6b7280" />
          </View>
        </View>
        <View className="my-8">
          <TopUp />
        </View>

        <View className="mt-3 flex space-y-10">
          <Section
            title="Historique de mes activités"
            icon={<FontAwesome name="history" size={24} color="#6b7280" />}
          />
          <Section
            title="Code de réduction"
            icon={<FontAwesome name="history" size={24} color="#6b7280" />}
          />
          <Section
            title="Parrainage"
            icon={<FontAwesome name="history" size={24} color="#6b7280" />}
          />
          <Section
            title="Parametre du compte"
            icon={<FontAwesome name="history" size={24} color="#6b7280" />}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}

const Section = ({
  icon,
  title,
  handlePress,
}: {
  icon: React.JSX.Element;
  title: string;
  handlePress: () => void;
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="flex flex-row justify-between border-b pb-4 border-gray-200 my-4"
    >
      <View className="flex flex-row space-x-3">
        {icon}
        <Text className="text-base text-gray-500">{title}</Text>
      </View>
      <Entypo name="chevron-right" size={24} color="#6b7280" />
    </TouchableOpacity>
  );
};
