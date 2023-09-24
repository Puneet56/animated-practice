import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Animated from "react-native-reanimated";

type SharedElementStackParamList = {
  CityList: undefined;
  CityDetail: { name: string; image: string };
};

const SharedElementStack =
  createNativeStackNavigator<SharedElementStackParamList>();

const SharedElement = () => {
  return (
    <SharedElementStack.Navigator>
      <SharedElementStack.Screen
        name="CityList"
        options={{
          title: "Shared Element",
        }}
        component={CityList}
      />
      <SharedElementStack.Screen
        name="CityDetail"
        options={{
          title: "City Detail",
        }}
        component={CityDetail}
      />
    </SharedElementStack.Navigator>
  );
};

export default SharedElement;

////////

const CityCard = ({ navigation, name, image }) => {
  return (
    <Pressable
      style={styles.card}
      onPress={() => navigation.navigate("CityDetail", { name, image })}
    >
      <Animated.View
        sharedTransitionTag={`image${name}`}
        style={styles.imageContainer}
      >
        <Image source={{ uri: image }} style={styles.image} />
        {/* <View
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "red",
          }}
        ></View> */}
      </Animated.View>
      <Text style={styles.name}>{name}</Text>
    </Pressable>
  );
};

const CityList = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search cities"
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={filteredCities}
        renderItem={({ item }) => (
          <CityCard
            name={item.name}
            image={`https://source.unsplash.com/200x300/?${item.name}`}
            navigation={navigation}
          />
        )}
        keyExtractor={(item) => item.name}
        numColumns={2}
      />
    </View>
  );
};

const CityDetail = ({ route }) => {
  const { name, image } = route.params;

  return (
    <View style={styles.container}>
      <Animated.View
        sharedTransitionTag={`image${name}`}
        style={styles.detailImageContainer}
      >
        <Image source={{ uri: image }} style={styles.image} />
        {/* <View
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "green",
          }}
        ></View> */}
      </Animated.View>
      <Text style={styles.name}>{name}</Text>
      <View
        style={{
          padding: 10,
        }}
      >
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi veniam,
          possimus eaque enim minima et necessitatibus modi porro! Aut odio
          dolore quis quidem voluptatibus accusamus. Quaerat, ullam sed. Nulla,
          commodi.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
          corporis a, odio, inventore nisi cumque in, ratione sequi voluptas
          quisquam ad laudantium. Culpa maxime, veniam illo ut facilis
          perspiciatis ducimus voluptatum reprehenderit provident adipisci
          laborum? Sapiente nesciunt magni quam qui. Sequi, odit adipisci. Rerum
          tenetur totam laudantium, dolore iste a vel? Adipisci at quas nam ex
          inventore repellat nihil labore fuga, quibusdam, doloribus dolore
          magnam, quaerat dignissimos nostrum possimus odio! Eum doloribus
          aperiam repellat consectetur consequuntur ab a dignissimos cumque
          omnis est officiis illo provident beatae quisquam, maxime itaque?
          Totam incidunt dolorem hic eligendi unde quae quo voluptatibus quaerat
          quas.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchBar: {
    height: 40,
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
  },
  card: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    overflow: "hidden",
    borderColor: "#ccc",
    borderWidth: 1,
    elevation: 5,
  },
  image: {
    width: "100%",
    height: 150,
  },
  imageContainer: {
    width: 200,
    height: 150,
  },
  detailImageContainer: {
    width: 600,
    height: 150,
  },
  name: {
    backgroundColor: "white",
    padding: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
});

const cities = [
  { name: "Delhi", image: "https://picsum.photos/id/1018/200/300" },
  { name: "Mumbai", image: "https://picsum.photos/id/1025/200/300" },
  { name: "Bangalore", image: "https://picsum.photos/id/1031/200/300" },
  { name: "Hyderabad", image: "https://picsum.photos/id/1035/200/300" },
  { name: "Ahmedabad", image: "https://picsum.photos/id/1043/200/300" },
  { name: "Chennai", image: "https://picsum.photos/id/1045/200/300" },
  { name: "New York", image: "https://picsum.photos/id/1060/200/300" },
  { name: "Paris", image: "https://picsum.photos/id/1069/200/300" },
  { name: "Tokyo", image: "https://picsum.photos/id/1074/200/300" },
  { name: "London", image: "https://picsum.photos/id/1084/200/300" },
  { name: "Sydney", image: "https://picsum.photos/id/1082/200/300" },
  { name: "Rome", image: "https://picsum.photos/id/925/200/300" },
  { name: "Barcelona", image: "https://picsum.photos/id/10/200/300" },
  { name: "Dubai", image: "https://picsum.photos/id/142/200/300" },
  { name: "Los Angeles", image: "https://picsum.photos/id/450/200/300" },
  { name: "Hong Kong", image: "https://picsum.photos/id/403/200/300" },
];

// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import * as React from "react";
// import { Button, View } from "react-native";
// import Animated from "react-native-reanimated";

// const Stack = createNativeStackNavigator();

// function Screen1({ navigation }) {
//   return (
//     <View style={{ flex: 1 }}>
//       <Animated.View
//         style={{ width: 150, height: 150, backgroundColor: "green" }}
//         sharedTransitionTag="sharedTag"
//       />
//       <Button title="Screen2" onPress={() => navigation.navigate("Screen2")} />
//     </View>
//   );
// }

// function Screen2({ navigation }) {
//   return (
//     <View style={{ flex: 1, marginTop: 50 }}>
//       <Animated.View
//         style={{ width: 100, height: 100, backgroundColor: "green" }}
//         sharedTransitionTag="sharedTag"
//       />
//       <Button title="Screen1" onPress={() => navigation.navigate("Screen1")} />
//     </View>
//   );
// }

// export default function SharedElementExample() {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: true }}>
//       <Stack.Screen name="Screen1" component={Screen1} />
//       <Stack.Screen name="Screen2" component={Screen2} />
//     </Stack.Navigator>
//   );
// }
