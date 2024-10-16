import Link from 'next/link';
// import { notFound } from 'next/navigation';
import React from 'react';
import { getVirusesInsecure } from '../../database/viruses';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import RemoveFromCart from './RemoveFromCart';

// import createOrUpdateCookie from '../cartActions';

export const metadata = {
  title: 'Cart',
  description: 'This is the cart page!',
};

// function itemsInCart() {
//   // const itemsInCart = props.isLoggedIn;
//   if (isLoggedIn) {
//     return 'yes';
//   }
//   return 'no';
// }

export default async function CartPage() {
  const cartCookie = await getCookie('cart');
  const cartItems = parseJson(cartCookie) || [];
  const viruses = await getVirusesInsecure();

  // Create new array merging cart and viruses data
  const virusesInCart = viruses
    .filter((virus) => cartItems.map((item) => item.id).includes(virus.id))
    .map(({ virusDesc, tagline, ...item }) => item)
    .reduce((acc, virus) => {
      const cartItem = cartItems.find((item) => item.id === virus.id);
      acc.push(cartItem ? { ...virus, ...cartItem } : virus);
      return acc;
    }, []);

  // Calculate total price
  const cartTotal = virusesInCart.reduce((acc, virus) => {
    return (acc += Number(virus.price) * virus.quantity);
  }, 0);

  export const itemsInCart {

  }

  return (
    <>
      {virusesInCart.length > 0 ? itemsInCart : 'no'}
      <h1>My Virus Cart</h1>
      <div className="cart">
        {virusesInCart.map((cartItem) => {
          return (
            <div
              key={`cartItemId-${cartItem.id}`}
              className="cartItem"
              data-test-id="product-<product id>"
            >
              <Link href={`/viruses/${cartItem.id}`}>
                <img
                  alt={cartItem.virusName}
                  src={`/viruses/${cartItem.image}`}
                  data-test-id="product-image"
                />
              </Link>
              <div className="info">
                <Link href={`/viruses/${cartItem.id}`}>
                  <h2>{cartItem.virusName}</h2>
                </Link>
                <h3>
                  Price:{' '}
                  <span data-test-id="product-price">{cartItem.price}</span>
                </h3>
                <h3>
                  Quantity: <span>{cartItem.quantity}</span>
                </h3>
                <h3>
                  Product subtotal:{' '}
                  <span>{Number(cartItem.price) * cartItem.quantity}</span>
                </h3>
              </div>
              <RemoveFromCart cartItemId={cartItem.id} />
            </div>
          );
        })}
        <h2>
          Total:{' '}
          <span data-test-id="cart-total" className="total">
            {cartTotal}
          </span>
        </h2>
        {/* <button>Checkout</button> */}
        <form action="/checkout">
          <button>Checkout</button>
        </form>
      </div>
    </>
  );
}
