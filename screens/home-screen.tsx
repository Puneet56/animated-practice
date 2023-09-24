import React from "react";
import { StyleSheet, Text, View } from "react-native";
import useTypedNavigation from "../hooks/useTypedNavigation";

const HomeScreen = () => {
  const navigation = useTypedNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
