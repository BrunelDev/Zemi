import { useState, useEffect } from "react";
import { Platform, Text, View, StyleSheet, Dimensions } from "react-native";
import * as Device from "expo-device";
import * as Location from "expo-location";
import MapView, {
  Marker,
  PROVIDER_GOOGLE,
  PROVIDER_DEFAULT,
} from "react-native-maps";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS === "android" && !Device.isDevice) {
        setErrorMsg(
          "Oops, this will not work on Snack in an Android Emulator. Try it on your device!"
        );
        return;
      }
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View classname="relative">
      {location && (
        <MapView
          onPress={() => {
            router.push("/(tabs)/Accueil");
          }}
          provider={
            Device.OS === "android" ? PROVIDER_GOOGLE : PROVIDER_DEFAULT
          }
          style={{
            width: "100%",
            height: Number(Dimensions.get("window").height),
          }}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.00922,
            longitudeDelta: 0.00421,
          }}
        >
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            image={require("@/assets/images/marker.png")}
          />
        </MapView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  paragraph: {
    fontSize: 18,
    textAlign: "center",
  },
});
