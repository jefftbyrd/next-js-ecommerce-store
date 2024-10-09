import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';
import { getVirus } from '../../../database/viruses';
import { parseJson } from '../../../util/json';
import AddToCart from './AddToCart';

export default async function SingleVirusPage(props) {
  const virus = getVirus(Number((await props.params).virusId));

  // const cartCookie = await getCookie('cart');

  if (!virus) {
    return notFound();
  }

  return (
    <div className="detailPage">
      <img alt={virus.name} src={virus.image} className="detailImage" />
      <h1 className="virusDetail">{virus.name}</h1>
      {/* <h2>{virus.tagline}</h2> */}

      <div className="price">{virus.price}</div>
      <div className="AddToCart">
        <AddToCart virusId={virus.id} />
      </div>
      <div className="virusDesc">{virus.desc}</div>
    </div>
  );
}
