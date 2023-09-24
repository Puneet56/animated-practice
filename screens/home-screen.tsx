import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import useTypedNavigation from "../hooks/useTypedNavigation";

const HomeScreen = () => {
  const navigation = useTypedNavigation();
  return (
    <View style={StyleSheet.absoluteFill}>
      <Pressable
        style={styles.tile}
        onPress={() => navigation.navigate("SharedElement")}
      >
        <Text>Shared element</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  tile: {
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    margin: 10,
  },
});
