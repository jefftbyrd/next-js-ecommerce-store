'use client';
import { useState } from 'react';
import createOrUpdateCookie from './actions';

export default function AddToCart(props) {
  const [quantity, setQuantity] = useState(1);
  return (
    <form>
      <div className="quantity">
        <label>
          <input
            data-test-id="product-quantity"
            value={Number(quantity)}
            // value={quantity}
            type="number"
            min="1"
            // step="1"
            // onInput="validity.valid||(value='')"
            onChange={(event) => setQuantity(event.currentTarget.value)}
          />{' '}
          Quantity
        </label>
      </div>
      {/* <button
        formAction={() => createOrUpdateCookie(props.virusId, Number(quantity))}
        data-test-id="product-add-to-cart"
      >
        Add to cart
      </button> */}

      <div
        className="control"
        data-mage-init='{"quantityControl":{"increase": ".increase", "decrease": ".decrease", "value": "#qty"}}'
      >
        <button type="button" className="qty-button decrease">
          -
        </button>
        <input
          type="number"
          name="qty"
          id="qty"
          maxLength="12"
          value="1"
          title="Qty"
          className="input-text qty"
          data-validate='{"required-number":true,"validate-item-quantity":{"minAllowed":1,"maxAllowed":10000}}'
        />
        <button type="button" className="qty-button increase">
          +
        </button>
      </div>
      <button
        formAction={() => createOrUpdateCookie(props.virusId, Number(quantity))}
        data-test-id="product-add-to-cart"
      >
        Add to cart
      </button>
      {/* </div> */}
    </form>
  );
}
