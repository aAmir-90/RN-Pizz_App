import { View, Text, Image, ScrollView, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MenuComponents from "../components/MenuComponents";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const data = [
    {
      id: "0",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7OOLnh9ceASFDrlsBxDQwmGBEyMqgxXicaw&s",
    },
    {
      id: "1",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtyUHaJAMXYPvV6a_-_XqE0YhhDGpCPofVOQ&usqp=CAU",
    },
    {
      id: "2",
      image:
        "https://i0.wp.com/www.promotionsinuae.com/wp-content/uploads/2018/07/Buy-Any-Medium-or-Large-Pizza-Get-The-2nd-Pizza-Free-Order-Online-Only..jpg?fit=552%2C287&ssl=1",
    },
    {
      id: "3",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDEcz7DVk3uBX_33FZVdPjiCvgpKsmx_9eSh7x4GrTyeMsQixOTd7SHXByKmdibQSQF94&usqp=CAU",
    },
    {
      id: "4",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKUKW1Wo4O6qBFGdD8klTfuXstxJVqQ-hvTw&s",
    },
    {
      id: "5",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3c2tudWvUFFn4ZXFYWbR8MUIzzi2mVpYs1Q&s",
    },
  ];

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ marginTop: 30 }}>
      <Pressable onPress={() => navigation.navigate("Pizza")}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {data.map((item, key) => (
            <View style={{ margin: 10 }} key={key}>
              <Image
                style={{ width: 250, height: 160 }}
                source={{ uri: item.image }}
              />
            </View>
          ))}
        </ScrollView>
      </Pressable>

      <MenuComponents />

      <View style={{ padding: 10 }}>
        <Image
          style={{ width: "100%", height: 150, borderRadius: 7 }}
          source={{
            uri: "https://api.dominos.co.in/prod-olo-api/images/flashBanner/Dominos_Howzzat_IPL-2021_Menu.jpg",
          }}
        />
      </View>

      <View style={{ padding: 10 }}>
        <Image
          style={{ width: "100%", height: 140, borderRadius: 7 }}
          source={{
            uri: "https://www.dominos.co.in/theme2/front/images/voucherimages/carousel9.png",
          }}
        />
      </View>

      <View style={{ padding: 10 }}>
        <Image
          style={{ width: "100%", height: 140, borderRadius: 7 }}
          source={{
            uri: "https://www.dominos.co.in/theme2/front/images/voucherimages/carousel13.png",
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
