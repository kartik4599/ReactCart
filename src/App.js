import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { itemAction } from "./context/CartItem";

function App() {
  const [msg, setMsg] = useState({
    title: "Sending...",
    message: "Sendind Cart Data!",
    status: "",
  });
  const [status, setStatus] = useState(false);
  const isCart = useSelector((state) => state.toggle.isCart);
  const cart = useSelector((state) => state.item.items);
  const dispatch = useDispatch();
  useEffect(() => {
    const pushData = async () => {
      setStatus(true);
      try {
        const res = await fetch(
          "https://expense-tracker-3cb01-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
          {
            method: "PUT",
            body: JSON.stringify(cart),
          }
        );
        if (res.ok) {
          setMsg({
            title: "Success!",
            message: "Sent Cart Data Successfully!",
            status: "success",
          });
        } else {
          setMsg({
            title: "Error!",
            message: "Sending Cart Data Failed!",
            status: "error",
          });
        }
      } catch (err) {
        console.log(err);
        setMsg({
          title: "Error!",
          message: "Sending Cart Data Failed!",
          status: "error",
        });
      }
      setTimeout(() => {
        setStatus(false);
      }, 1000);
    };
    if (cart.length > 0) {
      pushData();
    }
  }, [cart]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          "https://expense-tracker-3cb01-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json"
        );
        const data = await res.json();
        console.log(data);
        dispatch(itemAction.addCart(data));
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);

  return (
    <Layout>
      {status && (
        <Notification
          status={msg.status}
          title={msg.title}
          message={msg.message}
        />
      )}
      {isCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
