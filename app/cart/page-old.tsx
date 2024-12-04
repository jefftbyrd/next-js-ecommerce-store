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

// function GenerateCart(props) {
//   if (!props.show) {
//     return null;
//   }

//   return (
//     <div
//       key={`cartItemId-${props.cartItemId}`}
//       className="cartItem"
//       data-test-id="product-<product id>"
//     >
//       <Link href={`/viruses/${props.cartItemId}`}>
//         <img
//           alt={props.cartItemName}
//           src={`/viruses/${props.cartItemImage}`}
//           data-test-id="product-image"
//         />
//       </Link>
//       <div className="info">
//         <Link href={`/viruses/${props.cartItemId}`}>
//           <h2>{props.cartItemVirusName}</h2>
//         </Link>
//         <h3>
//           Price: <span data-test-id="product-price">{props.cartItemPrice}</span>
//         </h3>
//         <h3>
//           Quantity: <span>{props.cartItemQuantity}</span>
//         </h3>
//         <h3>
//           Product subtotal:{' '}
//           <span>{Number(props.cartItemPrice) * props.cartItemQuantity}</span>
//         </h3>
//       </div>
//       <RemoveFromCart cartItemId={props.cartItemId} />
//     </div>
//   );
// }

type Props = {
  show: boolean;
  // virusesInCartList: [];
  // cartTotal: number;
};

function CartItemsList(props: Props) {
  if (!props.show) {
    return null;
  }
  return props.virusesInCartList;
}

function TotalAndCheckout(props: Props) {
  if (!props.show) {
    return null;
  }

  return (
    <>
      <h2>
        Total:{' '}
        <span data-test-id="cart-total" className="total">
          {props.cartTotal}
        </span>
      </h2>
      <form action="/checkout">
        <button>Checkout</button>
      </form>
    </>
  );
}

function CartEmpty(props: Props) {
  if (!props.show) {
    return null;
  }

  return 'Your cart is empty';
}

export default async function CartPage() {
  const cartCookie = await getCookie('cart');
  const cartItems: [] = parseJson(cartCookie) || [];
  const viruses = await getVirusesInsecure();

  // Create new array merging cart and viruses data
  const virusesInCart = viruses
    .filter((virus) =>
      cartItems.map((item: { id: number }) => item.id).includes(virus.id),
    )
    .map(({ virusDesc, tagline, ...item }) => item)
    .reduce((acc, virus: { id: number }) => {
      const cartItem = cartItems.find(
        (item: { id: number }) => item.id === virus.id,
      );
      acc.push(cartItem ? { ...virus, ...cartItem } : virus);
      return acc;
    }, []);

  // Calculate total price
  const cartTotal = virusesInCart.reduce(
    (acc: number, virus: { price: number; quantity: number }) => {
      return (acc += Number(virus.price) * virus.quantity);
    },
    0,
  );

  const virusesInCartList = virusesInCart.map(
    (cartItem: {
      id: 'number';
      quantity: 'number';
      virusName: 'string';
      price: 'number';
      image: 'string';
    }) => {
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
              Price: <span data-test-id="product-price">{cartItem.price}</span>
            </h3>
            <h3>
              Quantity: <span>{cartItem.quantity}</span>
            </h3>
            <h3>
              Product subtotal:{' '}
              <span>{Number(cartItem.price) * Number(cartItem.quantity)}</span>
            </h3>
          </div>
          <RemoveFromCart cartItemId={cartItem.id} />
        </div>
      );
    },
  );

  return (
    <>
      <h1>My Virus Cart</h1>
      <div className="cart">
        {/* <GenerateCart
          show={virusesInCart.length > 0}
          virusesInCartList={virusesInCartList}
        /> */}
        <CartItemsList
          show={virusesInCart.length > 0}
          virusesInCartList={virusesInCartList}
        />
        <TotalAndCheckout
          show={virusesInCart.length > 0}
          cartTotal={cartTotal}
        />
        <CartEmpty show={virusesInCart.length === 0} />
      </div>
    </>
  );
}
