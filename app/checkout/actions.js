'use server';

import { cookies } from 'next/headers';

// import { getCookie } from '../../util/cookies';
// import { parseJson } from '../../util/json';

export default async function deleteCookie() {
  await cookies().delete('cart');
}
