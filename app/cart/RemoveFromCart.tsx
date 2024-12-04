'use client';

// import { useState } from 'react';
import { removeItem } from './actions';

type Props = {
  cartItemId: number;
  // cartItemQuantity: number;
};

export default function RemoveFromCart(props: Props) {
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
        className="remove buttonBlue"
        formAction={() => removeItem(props.cartItemId)}
        data-test-id="cart-product-remove-<product id>"
        // onClick={(event) => setRemove(event)}
      >
        Remove
      </button>
    </form>
  );
}
