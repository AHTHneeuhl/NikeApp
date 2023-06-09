import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import CartListItem from "../components/CartListItem";

const CartTotal = () => {
  const subtotal = useSelector((state) =>
    state.cart.items.reduce(
      (total, cartItem) => total + cartItem.product.price * cartItem.quantity,
      0
    )
  );
  const freeDeliveryFrom = useSelector((state) => state.cart.freeDeliveryFrom);
  const deliveryFee = useSelector((state) => state.cart.deliveryFee);
  const requiredDeliveryFee = freeDeliveryFrom >= subtotal ? deliveryFee : 0;
  const total = requiredDeliveryFee + subtotal;

  return (
    <View style={styles.totalsContainer}>
      <View style={styles.row}>
        <Text style={styles.text}>Subtotal</Text>
        <Text style={styles.text}>{subtotal} US$</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Delivery</Text>
        <Text style={styles.text}>{requiredDeliveryFee} US$</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textBold}>Total</Text>
        <Text style={styles.textBold}>{total} US$</Text>
      </View>
    </View>
  );
};

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={CartTotal}
      />
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Checkout</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  totalsContainer: {
    margin: 20,
    paddingTop: 10,
    borderColor: "gainsboro",
    borderTopWidth: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2,
  },
  text: {
    fontSize: 16,
    color: "gray",
  },
  textBold: {
    fontSize: 16,
    fontWeight: "500",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "white",
    borderColor: "gainsboro",
    borderTopWidth: 1,
    padding: 20,
  },
  button: {
    position: "absolute",
    backgroundColor: "black",
    bottom: 24,
    padding: 20,
    width: "84%",
    alignSelf: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  buttonText: {
    color: "white",
    fontWeight: 500,
    fontSize: 16,
  },
});

export default Cart;
