import Image from 'next/image';
import Link from 'next/link';
import { getVirusesInsecure } from '../database/viruses';

export default async function Featured() {
  const viruses = await getVirusesInsecure();

  const featuredViruses = viruses.filter((virus) => {
    if (virus.featured !== '1') {
      return null;
    }
    return virus;
  });

  return (
    <div className="featured">
      <h2>Featured Viruses</h2>
      <div className="featuredGrid">
        {featuredViruses.map((virus) => {
          return (
            <div
              key={`virusId-${virus.id}`}
              // style={{ position: 'relative' }}
              style={{ backgroundImage: `url(viruses/${virus.image})` }}
              className="featuredItem"
            >
              <Link href={`/viruses/${virus.id}`}>
                {/* <img src={`viruses/${virus.image}`} /> */}
                {/* <Image
                src={`/viruses/${virus.image}`}
                fill={true}
                style={{
                  objectFit: 'contain',
                  verticalAlign: 'top',
                  top: '0',
                  margin: 'auto',
                }}
              /> */}
                <h3>{virus.virusName}</h3>
                {/* <div className="itemPrice">
                  € {Number(virus.price).toFixed(2)}
                </div> */}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
