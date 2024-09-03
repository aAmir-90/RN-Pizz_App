import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView, { Marker } from "react-native-maps";

const OrderDataScreen = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#006491", marginTop: 40 }}
    >
      <View
        style={{
          backgroundColor: "white",
          margin: 10,
          borderRadius: 6,
          padding: 8,
          marginBottom: 40,
        }}
      >
        <Text style={{ textAlign: "center", fontSize: 17 }}>
          Order has been accepted
        </Text>

        <Text
          style={{ textAlign: "center", fontWeight: "bold", marginTop: 30 }}
        >
          Arriving in 30 mins
        </Text>
      </View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <MapView
          style={{ height: 600, width: 450 }}
          initialRegion={{
            latitude: 28.6448,
            longitude: 77.216721,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker coordinate={{ latitude: 28.6448, longitude: 77.216721 }} />
        </MapView>
      </View>

      <View
        style={{
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "white",
          margin: 10,
          borderRadius: 8,
          marginTop: 40,
        }}
      >
        <Image
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            borderColor: "#fff0f5",
            borderWidth: 1,
          }}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyLXBWH6Tl3ITRFCI-ByH7IR_c0gRQhRsXzQ&usqp=CAU",
          }}
        />
        <View style={{ marginLeft: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: "700", color: "#ff6e4a" }}>
            4 valets near the restaurent
          </Text>
          <Text style={{ fontSize: 17, fontWeight: "600", color: "#696969" }}>
            Anyone will pick your order
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OrderDataScreen;
