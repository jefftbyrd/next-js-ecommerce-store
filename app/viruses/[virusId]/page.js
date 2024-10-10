import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';
import { getVirusInsecure } from '../../../database/viruses';
import { parseJson } from '../../../util/json';
import AddToCart from './AddToCart';

export async function generateMetadata(props) {
  const singleVirus = await getVirusInsecure(
    Number((await props.params).virusId),
  );
  return {
    title: singleVirus.virus_name,
    description: 'This is the ingleVirus.virus_name page ',
  };
}

export default async function SingleVirusPage(props) {
  const singleVirus = await getVirusInsecure(
    Number((await props.params).virusId),
  );

  // const virus = getVirus(Number((await props.params).virusId));

  // const cartCookie = await getCookie('cart');

  if (!singleVirus) {
    return notFound();
  }

  return (
    <div className="detailPage">
      <img
        alt={singleVirus.name}
        src={singleVirus.image}
        className="detailImage"
      />
      <h1 className="virusDetail">{singleVirus.virusName}</h1>
      <h2>{singleVirus.tagline}</h2>

      <div className="price">{singleVirus.price}</div>
      <div className="AddToCart">
        <AddToCart virusId={singleVirus.id} />
      </div>
      <div className="virusDesc">{singleVirus.virusDesc}</div>
    </div>
  );
}
