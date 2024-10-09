'use client';

import { useState } from 'react';
import createOrUpdateCookie from './actions';

export default function AddToCart(props) {
  const [quantity, setQuantity] = useState('');
  return (
    <form>
      <div className="quantity">
        <label>
          Quantity
          <input
            value={quantity}
            type="number"
            onChange={(event) => setQuantity(event.currentTarget.value)}
          />
        </label>
      </div>
      <button
        formAction={() => createOrUpdateCookie(props.virusId, Number(quantity))}
      >
        Add to cart
      </button>
    </form>
  );
}
