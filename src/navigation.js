import { Pressable, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome5 } from "@expo/vector-icons";

import ProductScreen from "./screens/ProductScreen";
import ProductDetailScreen from "./screens/ProductDetailScreen";
import Cart from "./screens/Cart";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ contentStyle: styles.container }}>
        <Stack.Screen
          name="Products"
          component={ProductScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate("Cart")}
                style={{ flexDirection: "row" }}
              >
                <FontAwesome5 name="shopping-cart" size={18} color="gray" />
                <Text style={styles.cartItems}>1</Text>
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="Product Details"
          component={ProductDetailScreen}
          options={{ presentation: "modal" }}
        />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  cartItems: {
    marginLeft: 5,
    fontWeight: "bold",
  },
  contentStyle: {
    backgroundColor: "#fff",
    padding: 10,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Navigation;
