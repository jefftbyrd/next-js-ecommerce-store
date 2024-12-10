'use client';
import { useState } from 'react';
import { updateCartQuantity } from './actions';

// type Props = {
//   cartItemId: number;
//   cartItemQuantity: number;
// };

// export default function Update(props: Props) {
export default function Update(props: any) {
  const [quantity, setQuantity] = useState(props.cartItemQuantity);
  return (
    <form>
      <div className="cartQuantity">
        <button
          className="buttonMinus buttonGreen"
          // onClick={() => setQuantity(quantity - 1)}
          // formAction={() =>
          //   updateCartQuantity(props.cartItemId, Number(quantity))
          onClick={() => setQuantity(quantity - 1)}
          formAction={() =>
            updateCartQuantity(props.cartItemId, Number(quantity))
          }
        >
          -
        </button>
        <input
          data-test-id="product-quantity"
          value={Number(quantity)}
          type="number"
          min="1"
          // onChange={(event) => setQuantity(event.currentTarget.value)}
          onChange={(event) => {
            setQuantity(event.currentTarget.value);
          }}
        />
        <button
          className="buttonPlus buttonGreen"
          onClick={() => setQuantity(quantity + 1)}
          formAction={() =>
            updateCartQuantity(props.cartItemId, Number(quantity))
          }
        >
          +
        </button>
      </div>
    </form>
  );
}
