import { useDispatch } from "react-redux";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { itemAction } from "../../context/CartItem";
const ProductItem = (props) => {
  const { title, price, description } = props;
  const dispatch = useDispatch();

  const cartHandler = () => {
    const obj = {
      title: title,
      quantity: 1,
      amount: price,
    };
    dispatch(itemAction.addItem(obj));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={cartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
