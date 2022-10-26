import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = () => {
  const items = useSelector((state) => state.item.items);
  const list = items.map((element, index) => {
    return (
      <CartItem
        key={index}
        item={{
          title: element.title,
          quantity: element.quantity,
          total: element.quantity * element.amount,
          price: element.amount,
        }}
      />
    );
  });

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{list}</ul>
    </Card>
  );
};

export default Cart;
