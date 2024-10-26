import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import { router } from "expo-router";
import { Button } from "@/components/button";

export default function first() {
  return (
    <View className="bg-white h-screen">
      <Onboarding
        bottomBarHighlight={false}
        onDone={() => {
          router.replace("/auth");
        }}
        bottomBarColor="white"
        className="bg-black"
        showNext={false}
        showSkip={false}
        containerStyles={{
          padding: 0,
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          height: "100vh",
          width: "100%",
          flex: 1,
          backgroundColor: "white",
        }}
        imageContainerStyles={{
          width: "fit-content",
          height: "fit-content",
        }}
        pages={[
          {
            backgroundColor: "#fff",
            image: (
              <View>
                <Image
                  source={require("@/assets/images/onboarding1.png")}
                  className="mt-[160px]"
                />
              </View>
            ),
            title: "Demander un trajet",
            subtitle:
              "Demandez un trajet et faites-vous récupérer par un conducteur de la communauté à proximité.",
          },
          {
            backgroundColor: "#fff",
            image: (
              <Image
                source={require("@/assets/images/onboarding2.png")}
                className="mt-[160px]"
              />
            ),
            title: "Confirmez votre chauffeur",
            subtitle:
              "Un vaste réseau de chauffeurs vous aide à trouver un trajet confortable, sûr et abordable.",
          },
          {
            backgroundColor: "#fff",
            image: (
              <View>
                <Image
                  source={require("@/assets/images/onboarding3.png")}
                  className="mt-[160px]"
                />
                <View className="absolute w-[300px] flex justify-center items-center left-0 -bottom-[250px] z-50">
                  <Button
                    title={"Commencer"}
                    handlePress={() => {
                      router.replace("/auth");
                    }}
                  />
                </View>
              </View>
            ),
            title: "Suivez votre trajet",
            subtitle:
              "Connaissez votre chauffeur à l'avance et visualisez sa position en temps réel sur la carte.",
          },
        ]}
      />
    </View>
  );
}
