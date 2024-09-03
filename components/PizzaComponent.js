import { View, Text, Pressable, Image } from "react-native";
import React, { useContext, useState } from "react";
import ModalDropdown from "react-native-modal-dropdown";
import { BasketConext, CartItems } from "../context";
import Toast from "react-native-root-toast";

const PizzaComponent = ({ pizza }) => {
  const data = [pizza];
  const options = ["Regular", "Medium", "Large"];

  const { cart, setCart } = useContext(CartItems);

  const [selected, setSelected] = useState(false);

  const [additems, setAdditems] = useState(0);

  const [size, setSize] = useState("Medium");

  const addToCart = () => {
    setSelected(true);

    if (additems === 0) {
      setAdditems(1);
    }

    const itemPresent = cart.find((item) => item.id === pizza.id);
    if (itemPresent) {
      setCart(
        cart.map((x) =>
          x.id === pizza.id
            ? { ...itemPresent, quantity: itemPresent.quantity + 1 }
            : x
        )
      );
    } else {
      setCart([...cart, { ...pizza, quantity: 1, size: size }]);
    }

    let toast = Toast.show("Added To Cart", {
      duration: Toast.durations.LONG,
      position: Toast.positions.BOTTOM,
    });

    setTimeout(function () {
      Toast.hide(toast);
    }, 2500);

    setAdditems(additems + 1);
  };

  const removeFromCart = () => {
    const itemPresent = cart.find((item) => item.id === pizza.id);

    if (additems === 1) {
      setSelected(false);

      setCart(cart.filter((x) => x.id !== pizza.id));
    } else {
      setCart(
        cart.map((x) =>
          x.id === pizza.id
            ? { ...itemPresent, quantity: itemPresent.quantity - 1 }
            : x
        )
      );
    }

    setAdditems(Math.max(0, additems - 1));

    let toast = Toast.show("Removed From Cart", {
      duration: Toast.durations.LONG,
      position: Toast.positions.BOTTOM,
    });

    setTimeout(function () {
      Toast.hide(toast);
    }, 2500);
  };

  return (
    <View style={{ marginBottom: 10 }}>
      {data.map((item, index) => (
        <Pressable
          key={index}
          style={{ borderEndColor: "AFD8F5", borderWidth: 0.1 }}
        >
          <Image
            style={{ height: 230, aspectRatio: 1 / 1, resizeMode: "cover" }}
            source={{ uri: item.image }}
          />
          <View style={{ backgroundColor: "#006491", padding: 10 }}>
            <Text
              style={{ fontSize: 17, fontWeight: "bold", color: "#ffffff" }}
            >
              {item.name.substr(0, 14)}
            </Text>
            <Text style={{ color: "pink", marginTop: 5 }}>
              {item.description.substr(0, 20) + "..."}
            </Text>

            <Pressable
              style={{
                marginTop: 5,
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <View>
                <Text style={{ color: "white", fontSize: 15 }}>Size</Text>
                <ModalDropdown
                  defaultIndex={0}
                  dropdownStyle={{ width: 60, height: 120 }}
                  style={{ width: 60 }}
                  options={options}
                  onSelect={(e) => setSize(String(options[e]))}
                ></ModalDropdown>
              </View>

              {selected ? (
                <Pressable
                  style={{
                    backgroundColor: "#03C03C",
                    padding: 2,
                    marginLeft: 15,
                    borderRadius: 4,

                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Pressable onPress={removeFromCart}>
                    <Text
                      style={{
                        fontSize: 20,
                        color: "white",
                        paddingHorizontal: 10,

                        fontWeight: "600",
                      }}
                    >
                      -
                    </Text>
                  </Pressable>

                  <Pressable>
                    <Text
                      style={{
                        fontSize: 18,
                        color: "white",
                        paddingHorizontal: 5,
                        fontWeight: "600",
                      }}
                    >
                      {additems}
                    </Text>
                  </Pressable>

                  <Pressable onPress={addToCart}>
                    <Text
                      style={{
                        fontSize: 20,
                        color: "white",
                        paddingHorizontal: 10,
                        fontWeight: "600",
                      }}
                    >
                      +
                    </Text>
                  </Pressable>
                </Pressable>
              ) : (
                <Pressable
                  onPress={addToCart}
                  style={{
                    backgroundColor: "#03C03C",
                    padding: 5,
                    borderRadius: 8,
                    marginLeft: 15,
                  }}
                >
                  <Text style={{ color: "#ffffff", fontWeight: "bold" }}>
                    Add To Cart
                  </Text>
                </Pressable>
              )}
            </Pressable>
          </View>
        </Pressable>
      ))}
    </View>
  );
};

export default PizzaComponent;
