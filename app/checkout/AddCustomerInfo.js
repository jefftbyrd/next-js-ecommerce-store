'use client';

// import { useState } from 'react';

import Link from 'next/link';
// import createOrUpdateCookie from '../globalActions';
import deleteCookie from './actions.js';

export default function AddCustomerInfo() {
  // const [quantity, setQuantity] = useState('');

  return (
    <>
      <form className="customerInfo">
        <label>
          First Name: <input data-test-id="checkout-first-name" />
        </label>
        <label>
          Last Name: <input data-test-id="checkout-last-name" />
        </label>
        <label>
          Email: <input type="email" data-test-id="checkout-email" />
        </label>
        <label>
          Address: <input data-test-id="checkout-address" />
        </label>
        <label>
          City: <input data-test-id="checkout-city" />
        </label>
        <label>
          Postal Code:{' '}
          <input type="number" data-test-id="checkout-postal-code" />
        </label>
        <label>
          Country: <input data-test-id="checkout-country" />
        </label>
        <label>
          Credit Card:{' '}
          <input
            // placeholder="1234 1234 1234 1234"
            // maxLength="16"
            data-test-id="checkout-credit-card"
            inputMode="numeric"
            pattern="[0-9\s]{13,19}"
            autoComplete="cc-number"
            maxLength="19"
            placeholder="xxxx xxxx xxxx xxxx"
          />
        </label>
        <label>
          Expiration Date:{' '}
          <input type="month" data-test-id="checkout-expiration-date" />
        </label>
        <label>
          Security Code:{' '}
          <input maxLength="3" data-test-id="checkout-security-code" />
        </label>
        <button
          data-test-id="checkout-confirm-order"
          onClick={async () => await deleteCookie()}
          formAction="/thank-you"
        >
          Confirm Order
        </button>
      </form>

      {/* <form>
        <button formAction="/thank-you">freeCodeCamp</button>
      </form> */}
    </>
  );
}
