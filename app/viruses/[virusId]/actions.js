'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

export default async function createOrUpdateCookie(virusId, quantity) {
  // 1. get the cookie
  const cartCookie = await getCookie('cart');

  // 2. parse the cookie
  const cart = cartCookie === undefined ? [] : parseJson(cartCookie);

  // 3. edit the cookie value
  const virusToUpdate = cart.find((virusQuantity) => {
    return virusQuantity.id === virusId;
  });

  if (!virusToUpdate) {
    cart.push({ id: virusId, quantity: quantity });
  } else {
    virusToUpdate.quantity += quantity;
  }

  (await cookies()).set('cart', JSON.stringify(cart));
}
