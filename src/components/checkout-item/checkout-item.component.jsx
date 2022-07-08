import "./checkout-item.styles.scss";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from "../../store/cart/cart.action";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addItemHandler = () => {
    dispatch(addItemToCart(cartItems, cartItem));
  };
  const removeItemHandler = () => {
    dispatch(removeItemFromCart(cartItems, cartItem));
  };
  const clearItemHandler = () => {
    dispatch(clearItemFromCart(cartItems, cartItem));
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`}></img>
      </div>
      <span className="name"> {name} </span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          {" "}
          &#10094;{" "}
        </div>
        <div className="arrow" onClick={addItemHandler}>
          {" "}
          &#10095;{" "}
        </div>
        <span className="value">{quantity}</span>{" "}
      </span>
      <span className="price"> {price} </span>
      <div
        className="remove-button"
        onClick={() => {
          clearItemHandler(cartItem);
        }}
      >
        {" "}
        &#10005;{" "}
      </div>
    </div>
  );
};

export default CheckoutItem;
