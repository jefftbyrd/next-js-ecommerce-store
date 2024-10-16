'use client';

// import { useState } from 'react';
import removeItem from './actions';

export default function RemoveFromCart(props) {
  // const [remove, setRemove] = useState('');
  return (
    <form>
      {/* <div className="quantity">
        <label>
          Quantity
          <input
            value={quantity}
            type="number"
            onChange={(event) => setQuantity(event.currentTarget.value)}
          />
        </label>
      </div> */}
      <button
        formAction={() => removeItem(props.cartItemId)}
        data-test-id="cart-product-remove-<product id>"
        // onClick={(event) => setRemove(event)}
      >
        Remove from cart
      </button>
    </form>
  );
}
