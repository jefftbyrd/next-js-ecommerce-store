'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

export type Cart = {
  id: number;
  quantity: number;
};

export default async function createOrUpdateCookie(
  virusId: number,
  quantity: number,
) {
  // 1. get the cookie
  const cartCookie = await getCookie('cart');

  // 2. parse the cookie
  const cart: Cart[] = cartCookie === undefined ? [] : parseJson(cartCookie);

  // 3. edit the cookie value
  const virusToUpdate = cart.find((virus) => {
    return virus.id === virusId;
  });

  if (!virusToUpdate) {
    cart.push({ id: virusId, quantity: quantity });
  } else {
    virusToUpdate.quantity += quantity;
  }

  (await cookies()).set('cart', JSON.stringify(cart));
}
