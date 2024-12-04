// import './singleVirus.module.css';
// import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';
import type { Virus } from '../../../database/viruses';
import { getVirusInsecure } from '../../../database/viruses';
// import { parseJson } from '../../../util/json';
import AddToCart from './AddToCart';

type Props = {
  params: Promise<{
    virusId: number;
  }>;
};

export async function generateMetadata(props: Props) {
  const singleVirus = await getVirusInsecure(
    Number((await props.params).virusId),
  );
  return {
    title: singleVirus.virusName,
    description: `This is the ${singleVirus.virusName} page `,
  };
}

export function Tagline(props) {
  if (!props.show) {
    return null;
  }
  return <h2>({props.singleVirus.tagline})</h2>;
}

export function Classification(props: Props) {
  if (!props.show) {
    return null;
  }

  return (
    <div className="classification">
      <div>
        Realm
        <span>{props.virusId.realm}</span>
      </div>
      <div>
        Kingdom
        <span>{props.virusId.kingdom}</span>
      </div>
      <div>
        Phylum
        <span>{props.virusId.phylum}</span>
      </div>
      <div>
        Class
        <span>{props.virusId.class}</span>
      </div>
      <div>
        Order
        <span>{props.virusId.vOrder}</span>
      </div>
      <div>
        Family
        <span>{props.virusId.vFamily}</span>
      </div>
      <div>
        Genus
        <span>{props.virusId.genus}</span>
      </div>
      <div>
        Species
        <span>{props.virusId.species}</span>
      </div>
    </div>
  );
}

export default async function SingleVirusPage(props: Props) {
  const singleVirus = await getVirusInsecure(
    Number((await props.params).virusId),
  );

  if (!singleVirus) {
    return notFound();
  }

  console.log('single virus', singleVirus);

  return (
    <div className="subGrid">
      <div className="singleVirusPage inside">
        <div className="hideOverflow">
          <img
            className="bigImage"
            alt={singleVirus.virusName}
            src={singleVirus.image}
          />
        </div>
        <div className="content">
          <h1>{singleVirus.virusName}</h1>
          <Tagline show={singleVirus.tagline} singleVirus={singleVirus} />
          <div className="virusData">
            <div className="virusDesc">
              {singleVirus.virusDesc}
              <Classification show={singleVirus.realm} virusId={singleVirus} />
            </div>

            <div className="buy">
              <div className="price">
                € {Number(singleVirus.price).toFixed(2)}
              </div>
              <div className="AddToCart">
                <AddToCart virusId={singleVirus.id} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
