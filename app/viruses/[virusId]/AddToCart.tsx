'use client';
import { useState } from 'react';
import createOrUpdateCookie from './actions';

type Props = {
  virusId: number;
};

export default function AddToCart(props: Props) {
  const [quantity, setQuantity] = useState(1);
  return (
    <form>
      <div className="cartQuantity">
        <button
          className="buttonMinus buttonGreen"
          formAction={() => setQuantity(quantity - 1)}
        >
          -
        </button>
        <input
          data-test-id="product-quantity"
          value={quantity}
          type="number"
          min="1"
          onChange={(event) => setQuantity(event.currentTarget.value)}
        />
        <button
          className="buttonPlus buttonGreen"
          formAction={() => setQuantity(quantity + 1)}
        >
          +
        </button>
      </div>
      <button
        formAction={async () => {
          setQuantity(1);
          await createOrUpdateCookie(props.virusId, Number(quantity));
        }}
        data-test-id="product-add-to-cart"
        className="addToCart buttonBlue"
      >
        Add to cart
      </button>
    </form>
  );
}
