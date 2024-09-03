import { View, Text, FlatList, Pressable } from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import pizza from "../data/pizza";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import PizzaComponent from "../components/PizzaComponent";
import { CartItems } from "../context";

const PizzaScreen = () => {
  const data = pizza;
  const navigation = useNavigation();
  const { cart, setCart } = useContext(CartItems);

  const total = cart
    .map((item) => Number(item.price * item.quantity))
    .reduce((prev, curr) => prev + curr, 0);

  console.log(cart, "cart items added");
  console.log(total, "total price");
  return (
    <SafeAreaView>
      <Ionicons
        onPress={() => navigation.goBack()}
        name="arrow-back-circle"
        size={30}
        color="black"
      />

      <FlatList
        numColumns={2}
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => <PizzaComponent pizza={item} />}
      />

      {total === 0 ? null : (
              <Pressable
                  onPress={() => navigation.navigate("Cart")}
          style={{
            backgroundColor: "green",
            padding: 10,
            position: "absolute",
            bottom: 100,
            left: 150,
            borderRadius: 8,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 16,
              color: "white",
            }}
          >
            Go To Cart
          </Text>
        </Pressable>
      )}
    </SafeAreaView>
  );
};

export default PizzaScreen;
