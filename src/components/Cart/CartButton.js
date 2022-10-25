import { useDispatch, useSelector } from "react-redux";
import { toggleAction } from "../../context/ShowCart";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const toggleHandler = () => {
    dispatch(toggleAction.showCart());
  };

  const item=useSelector(state=>state.item.items);

  return (
    <button onClick={toggleHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{item.length}</span>
    </button>
  );
};

export default CartButton;
