'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

export async function removeItem(cartItemId: number) {
  // 1. get the cookie
  const cartCookie = await getCookie('cart');

  // 2. parse the cookie
  const cart: { id: number }[] =
    cartCookie === undefined ? [] : parseJson(cartCookie);

  // 3. edit the cookie value
  const itemToRemove = cart.find((item: { id: number }) => {
    return item.id === cartItemId;
  });

  const modifiedCart = cart.filter(
    (item: { id: number }) => item.id !== itemToRemove.id,
  );

  (await cookies()).set('cart', JSON.stringify(modifiedCart));
}

export async function updateCartQuantity(
  cartItemId: number,
  cartItemQuantity: number,
) {
  // 1. get the cookie
  const cartCookie = await getCookie('cart');

  // 2. parse the cookie
  const cart = cartCookie === undefined ? [] : parseJson(cartCookie);

  // 3. edit the cookie value
  const cartItemToUpdate = cart.find((item) => {
    return item.id === cartItemId;
  });

  cartItemToUpdate.quantity = cartItemQuantity;

  (await cookies()).set('cart', JSON.stringify(cart));
}

type Props = {
  virusesInCart: [
    {
      id: number;
      price: number;
      quantity: number;
    },
  ];
};

// export async function CartTotal(props: Props) {
//   const cartTotalAmount: number = await props.virusesInCart.reduce(
//     (acc: number, virus: { price: number; quantity: number }) => {
//       return (acc += Number(virus.price) * virus.quantity);
//     },
//     0,
//   );
//   return cartTotalAmount;
// }

export async function CartTotal(props: Props) {
  return await props.virusesInCart.reduce(
    (acc: number, virus: { price: number; quantity: number }) => {
      return (acc += Number(virus.price) * virus.quantity);
    },
    0,
  );
}
