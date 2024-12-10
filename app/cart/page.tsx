// import './cart.module.scss';
import Link from 'next/link';
// import { notFound } from 'next/navigation';
import React from 'react';
// import type { Virus } from '../../database/viruses';
import { getVirusesInsecure } from '../../database/viruses';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import { CartTotal } from './actions';
import RemoveFromCart from './RemoveFromCart';
import UpdateCart from './UpdateCart';

export const metadata = {
  title: 'Cart',
  description: 'This is the cart page!',
};

// type CartItem = {
//   id: number;
//   quantity: number;
//   virusName: string;
//   price: number;
//   image: string;
// };

// type PropsOne = {
//   show: boolean;
//   virusesInCartList: Virus[];
// };

function CartItemsList(props: any) {
  // function CartItemsList(props: PropsOne) {
  if (!props.show) {
    return null;
  }
  return props.virusesInCartList;
}

// type PropsTwo = {
//   show: boolean;
//   virusesInCart: Virus[];
// };

function TotalAndCheckout(props: any) {
  // function TotalAndCheckout(props: PropsTwo) {
  if (!props.show) {
    return null;
  }
  return (
    <div className="orderSummary oneGrid">
      <h2>
        Order
        <br />
        Summary
      </h2>
      <div className="total">
        <h3>Total:</h3>
        {/* <h3 data-test-id="cart-total" className="amount">
          €{props.cartTotal.toFixed(2)}
        </h3> */}
        <h3 data-test-id="cart-total" className="amount">
          €<CartTotal virusesInCart={props.virusesInCart} />
        </h3>
      </div>
      <form action="/checkout">
        <button className="buttonBlue">Checkout</button>
      </form>
    </div>
  );
}

// type PropsThree = {
//   show: boolean;
// };

function CartEmpty(props: any) {
  // function CartEmpty(props: PropsThree) {
  if (!props.show) {
    return null;
  }
  return <h2>Your cart is empty</h2>;
}

export default async function CartPage() {
  const cartCookie = await getCookie('cart');
  const cartItems = parseJson(cartCookie) || [];
  // const cartItems: CartItem[] = parseJson(cartCookie) || [];
  const viruses = await getVirusesInsecure();

  // Create new array merging cart and viruses data
  const virusesInCart: any = viruses
    // const virusesInCart: [] = viruses
    .filter(
      (virus: any) => cartItems.map((item: any) => item.id).includes(virus.id),
      // cartItems.map((item: { id: number }) => item.id).includes(virus.id),
    )
    .map(({ virusDesc, tagline, ...item }) => item)
    .reduce((acc: any, virus: any) => {
      // .reduce((acc, virus: { id: number }) => {
      const cartItem = cartItems.find(
        (item: any) => item.id === virus.id,
        // (item: { id: number }) => item.id === virus.id,
      );
      // acc.push(cartItem ? { ...virus, ...cartItem } : virus);
      acc.push({ ...virus, ...cartItem });
      return acc;
    }, []);

  const virusesInCartList = virusesInCart.map((cartItem: any) => {
    // const virusesInCartList = virusesInCart.map(
    //   (cartItem: {
    //     id: number;
    //     quantity: number;
    //     virusName: string;
    //     price: number;
    //     image: string;
    //   }) => {
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
          <Link className="virusName" href={`/viruses/${cartItem.id}`}>
            <h2>{cartItem.virusName}</h2>
          </Link>
          <div className="cartItemQuantity">
            <h3>Quantity</h3>
            <UpdateCart
              cartItemId={Number(cartItem.id)}
              cartItemQuantity={Number(cartItem.quantity)}
            />
            <RemoveFromCart cartItemId={Number(cartItem.id)} />
          </div>
          <div className="subtotal">
            <h3>Virus Total</h3>
            {/* Product subtotal:{' '} */}€{' '}
            {(Number(cartItem.price) * Number(cartItem.quantity)).toFixed(2)}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="subGrid">
      <div className="inside">
        <div className="cartPage threeOneGrid">
          <div className="virusCart three">
            <h1>My Virus Cart</h1>
            <div className="cart">
              <CartItemsList
                show={virusesInCart.length > 0}
                virusesInCartList={virusesInCartList}
              />
              <CartEmpty show={virusesInCart.length === 0} />
            </div>
          </div>
          <TotalAndCheckout
            show={virusesInCart.length > 0}
            // cartTotal={cartTotal}
            virusesInCart={virusesInCart}
          />
          {/* <CartTotal virusesInCart={virusesInCart} /> */}
        </div>
      </div>
    </div>
  );
}
