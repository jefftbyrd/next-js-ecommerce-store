'use client';
// import Link from 'next/link';
// import React from 'react';
// import { getVirusesInsecure } from '../../database/viruses';
// import { getCookie } from '../../util/cookies';
// import { parseJson } from '../../util/json';
import deleteCookie from './actions';
import Countries from './Countries';

// import RemoveFromCart from './RemoveFromCart';
// import UpdateCart from './UpdateCart';

export default function CheckoutForm() {
  // const cartCookie = await getCookie('cart');
  // const cartItems: [] = parseJson(cartCookie) || [];
  // const viruses = await getVirusesInsecure();

  // // Create new array merging cart and viruses data
  // const virusesInCart = viruses
  //   .filter((virus) =>
  //     cartItems.map((item: { id: number }) => item.id).includes(virus.id),
  //   )
  //   .map(({ virusDesc, tagline, ...item }) => item)
  //   .reduce((acc, virus: { id: number }) => {
  //     const cartItem = cartItems.find(
  //       (item: { id: number }) => item.id === virus.id,
  //     );
  //     acc.push(cartItem ? { ...virus, ...cartItem } : virus);
  //     return acc;
  //   }, []);

  // // Calculate total price
  // const cartTotal = virusesInCart.reduce(
  //   (acc: number, virus: { price: number; quantity: number }) => {
  //     return (acc += Number(virus.price) * virus.quantity);
  //   },
  //   0,
  // );

  // const virusesInCartList = virusesInCart.map(
  //   (cartItem: {
  //     id: 'number';
  //     quantity: 'number';
  //     virusName: 'string';
  //     price: 'number';
  //     image: 'string';
  //   }) => {
  //     return (
  //       <div
  //         key={`cartItemId-${cartItem.id}`}
  //         className="cartItem"
  //         data-test-id="product-<product id>"
  //       >
  //         <Link href={`/viruses/${cartItem.id}`}>
  //           <img
  //             alt={cartItem.virusName}
  //             src={`/viruses/${cartItem.image}`}
  //             data-test-id="product-image"
  //           />
  //         </Link>
  //         <div className="info">
  //           <Link className="virusName" href={`/viruses/${cartItem.id}`}>
  //             <h2>{cartItem.virusName}</h2>
  //           </Link>
  //           <div className="cartItemQuantity">
  //             <h3>Quantity</h3>
  //             <UpdateCart
  //               cartItemId={cartItem.id}
  //               cartItemQuantity={cartItem.quantity}
  //             />
  //             <RemoveFromCart cartItemId={cartItem.id} />
  //           </div>
  //           <div className="subtotal">
  //             <h3>Virus Total</h3>
  //             {/* Product subtotal:{' '} */}€{' '}
  //             {(Number(cartItem.price) * Number(cartItem.quantity)).toFixed(2)}
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   },
  // );

  return (
    <>
      <h1>Checkout</h1>
      <form className="customerInfo" id="checkOutForm">
        <section>
          <h2>Contact</h2>
          <label>
            Email:
            <input
              type="email"
              placeholder="Email"
              data-test-id="checkout-email"
              required
            />
          </label>
        </section>
        <section>
          <h2>Delivery</h2>
          <div className="fitTwo">
            <label>
              First Name:{' '}
              <input
                placeholder="First Name"
                data-test-id="checkout-first-name"
                required
              />
            </label>
            <label>
              Last Name:{' '}
              <input
                placeholder="Last Name"
                data-test-id="checkout-last-name"
                required
              />
            </label>
          </div>

          <label>
            Address:{' '}
            <input
              placeholder="Address"
              data-test-id="checkout-address"
              required
            />
          </label>
          <label>
            Country
            <Countries />
          </label>
          {/* <Countries /> */}
          <div className="fitTwo">
            <label>
              City:{' '}
              <input placeholder="City" data-test-id="checkout-city" required />
            </label>
            <label>
              Postal Code:
              <input
                type="number"
                maxLength="8"
                placeholder="Postal Code"
                data-test-id="checkout-postal-code"
                required
              />
            </label>
          </div>
        </section>
        <section>
          <h2>Payment</h2>

          <label>
            Cardholder Name: <input placeholder="Cardholder Name" required />
          </label>
          <label>
            Card Number:{' '}
            <input
              data-test-id="checkout-credit-card"
              inputMode="numeric"
              pattern="[0-9\s]{13,19}"
              autoComplete="cc-number"
              maxLength="19"
              placeholder="xxxx xxxx xxxx xxxx"
              required
            />
          </label>
          <div className="fitTwo">
            <label>
              Expiration Date: (MM/YY){' '}
              <input
                type="month"
                // placeholder="MM/YY"
                data-test-id="checkout-expiration-date"
                required
              />
            </label>
            <label>
              CVV: (3 digits){' '}
              <input
                // type="number"
                // max="999"
                // min="-999"
                // pattern="[0-9]"
                maxLength="3"
                placeholder="CVV"
                data-test-id="checkout-security-code"
                required
              />
            </label>
          </div>
        </section>
        <section>
          <button
            form="checkOutForm"
            className="confirmButton"
            data-test-id="checkout-confirm-order"
            formAction={async () => {
              // 'use server';
              await deleteCookie();
              window.location.href = '/thank-you';
            }}
          >
            Confirm Order
          </button>
        </section>
      </form>
    </>
  );
}
