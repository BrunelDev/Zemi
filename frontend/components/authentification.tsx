import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import { useState } from "react";
import { router } from "expo-router";

export function Authentification() {
  const [isLoginSelected, setIsLoginSelected] = useState(true);
  return (
    <View className="bg-white shadow rounded-lg h-[260px] p-4 w-full">
      <View className="flex flex-row justify-between pb-5 border-b border-gray-200">
        <View>
          <Text
            className="font-medium text-lg"
            onPress={() => {
              setIsLoginSelected(false);
            }}
          >
            Inscription
          </Text>
          {!isLoginSelected ? (
            <View className="w-[40px] h-1 rounded bg-primary mx-auto mt-1"></View>
          ) : null}
        </View>
        <View>
          <Text
            className="font-medium text-lg"
            onPress={() => {
              setIsLoginSelected(true);
            }}
          >
            Connexion
          </Text>
          {isLoginSelected ? (
            <View className="w-[40px] h-1 rounded bg-primary mx-auto mt-1"></View>
          ) : null}
        </View>
      </View>
      {!isLoginSelected ? (
        <View className="mt-3 space-y-5 w-full">
          <TextInput
            inputMode="email"
            placeholderTextColor={"#C8C7CC"}
            placeholder="Email"
            className="w-full h-10 rounded-md pl-3 border border-gray-200"
          />
          <View className="flex flex-row h-10 w-full">
            <View className="flex justify-center items-center p-1 border-gray-200 border border-r-0 rounded-tl-md rounded-bl-md w-[15%]">
              <Image
                resizeMode="contain"
                source={require("@/assets/images/benin.png")}
                className=""
              />
            </View>
            <TextInput
              inputMode="tel"
              placeholderTextColor={"#C8C7CC"}
              placeholder="Numero de Téléphone"
              className="w-[85%] h-10 rounded-tr-md rounded-br-md pl-3 border border-gray-200"
            />
          </View>
        </View>
      ) : (
        <View className="mt-3 space-y-5">
          <Text>Connectez-vous avec un numéro de téléphone</Text>
          <TextInput
            inputMode="tel"
            placeholderTextColor={"#C8C7CC"}
            placeholder="Numero de Téléphone"
            className="w-full h-10 rounded-md pl-3 border border-gray-200"
          />
        </View>
      )}
      <TouchableOpacity
        onPress={() => {
          router.push("/otpverification");
        }}
        activeOpacity={0.7}
        className="w-full bg-primary h-9 rounded-md flex justify-center items-center mt-auto"
      >
        <Text className="text-white">
          {isLoginSelected ? "Connexion" : "S'inscrire"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
