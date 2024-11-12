import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
} from "react-native";
import React from "react";

export function Carousel() {
  return (
    <View>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        data={[
          { id: 1, title: "Car 1" },
          { id: 2, title: "Car 2" },
          { id: 3, title: "Car 3" },
          { id: 4, title: "Car 4" },
          { id: 5, title: "Car 5" },
        ]}
        renderItem={({ item, index }) => (
          <CarouselItem image="@/assets/images/bg.png" key={index} />
        )}
      />
    </View>
  );
}

const CarouselItem = ({ image }: { image: string }) => {
  return (
    <View
      className="flex flex-row items-center justify-center h-[150px] px-2 py-1"
      style={{ width: Dimensions.get("screen").width - 32 }}
    >
      <Image
        resizeMode="cover"
        className="w-full h-full rounded-lg"
        source={require("@/assets/images/zem1.jpeg")}
      />
    </View>
  );
};
const styles = StyleSheet.create({});
