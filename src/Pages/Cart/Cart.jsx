import { useContext } from "react";
import "./Cart.css";
import { Storecontext } from "../../context/Storecontext";

const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(Storecontext);

  // Calculate subtotal
  const calculateSubtotal = () => {
    return food_list.reduce((total, item) => {
      const quantity = cartItems[item._id] || 0;
      return total + item.price * quantity;
    }, 0);
  };

  const deliveryFee = 2; // Static delivery fee
  const subtotal = calculateSubtotal();
  const total = subtotal + deliveryFee;

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item) => {
          const quantity = cartItems[item._id] || 0;
          if (quantity > 0) {
            return (
              <div key={item._id}>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>${item.price.toFixed(2)}</p>
                  <p>{quantity}</p>
                  <p>${(item.price * quantity).toFixed(2)}</p>
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="cross"
                  >
                    x
                  </button>
                </div>
                <hr />
              </div>
            );
          }
          
        })}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
        </div>
        <div className="cart-total-details">
          <p>Subtotal</p>
          <p>${subtotal.toFixed(2)}</p>
        </div>
        <hr />
        <div className="cart-total-details">
          <p>Delivery Fee</p>
          <p>${deliveryFee.toFixed(2)}</p>
        </div>
        <hr />
        <div className="cart-total-details">
          <p>Total</p>
          <p>${total.toFixed(2)}</p>
        </div>
      </div>

      <button className="checkout-button">Proceed to Checkout</button>

      <div className="cart-promocode">
        <div>
          <p>If you have a promo code, enter it here:</p>
          <div className="cart-promocode-input">
            <input type="text" placeholder="Promo Code" />
            <button className="promo-submit-button">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
