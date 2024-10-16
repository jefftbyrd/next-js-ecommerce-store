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
    description: 'This is the singleVirus.virus_name page ',
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
    <div className="singleVirusPage">
      <img
        className="bigImage"
        alt={singleVirus.name}
        src={singleVirus.image}
      />
      <div className="content">
        <h1>{singleVirus.virusName}</h1>
        {/* <h2>{singleVirus.tagline}</h2> */}
        <div className="virusData">
          <div className="virusDesc">
            {singleVirus.virusDesc}
            {/* <img alt={singleVirus.name} src={singleVirus.image} /> */}
          </div>

          <div className="buy">
            <div className="price">{Number(singleVirus.price).toFixed(2)}</div>
            <div className="AddToCart">
              <AddToCart virusId={singleVirus.id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
