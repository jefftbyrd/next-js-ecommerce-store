import { notFound } from 'next/navigation';
import React from 'react';
// import type { Virus } from '../../../database/viruses';
import { getVirusInsecure } from '../../../database/viruses';
import AddToCart from './AddToCart';

// type PropsParams = {
//   params: {
//     singleVirus: Virus;
//     virusId: number;
//     show: string | null;
//   };
// };

// type Props = {
//   show: string | null;
//   singleVirus: Virus;
// };

export async function generateMetadata(props: any) {
  // export async function generateMetadata(props: PropsParams) {
  const singleVirus: any = await getVirusInsecure(
    // const singleVirus: Virus | undefined = await getVirusInsecure(
    Number((await props.params).virusId),
  );
  return {
    title: singleVirus.virusName,
    description: `This is the ${singleVirus.virusName} page `,
  };
}

function Tagline(props: any) {
  // function Tagline(props: Props) {
  if (!props.show) {
    return null;
  }
  return <h2>({props.singleVirus.tagline})</h2>;
}

function Classification(props: any) {
  // function Classification(props: Props) {
  if (!props.show) {
    return null;
  }
  return (
    <div className="classification">
      <div>
        Realm
        <span>{props.singleVirus.realm}</span>
      </div>
      <div>
        Kingdom
        <span>{props.singleVirus.kingdom}</span>
      </div>
      <div>
        Phylum
        <span>{props.singleVirus.phylum}</span>
      </div>
      <div>
        Class
        <span>{props.singleVirus.class}</span>
      </div>
      <div>
        Order
        <span>{props.singleVirus.vOrder}</span>
      </div>
      <div>
        Family
        <span>{props.singleVirus.vFamily}</span>
      </div>
      <div>
        Genus
        <span>{props.singleVirus.genus}</span>
      </div>
      <div>
        Species
        <span>{props.singleVirus.species}</span>
      </div>
    </div>
  );
}

export default async function SingleVirusPage(props: any) {
  // export default async function SingleVirusPage(props: Props) {
  const singleVirus: any = await getVirusInsecure(
    Number((await props.params).virusId),
  );

  if (!singleVirus) {
    return notFound();
  }

  return (
    <div className="subGridSingleVirus">
      <img
        className="bigImage"
        alt={singleVirus.virusName}
        src={singleVirus.image}
      />
      <div className="singleVirusPage inside">
        <div className="content">
          <h1>{singleVirus.virusName}</h1>
          <Tagline show={singleVirus.tagline} singleVirus={singleVirus} />
          <div className="virusData">
            <div className="virusDesc">
              <p>{singleVirus.virusDesc}</p>
              <Classification
                show={singleVirus.realm}
                singleVirus={singleVirus}
              />
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
