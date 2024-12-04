import Image from 'next/image';
import Link from 'next/link';
import { getVirusesInsecure } from '../../database/viruses';

export const metadata = {
  title: 'Viruses',
  description: 'All your favorites in one place!',
};

export default async function Viruses() {
  const viruses = await getVirusesInsecure();

  return (
    <div className="subGrid">
      <div className="virusPage inside">
        <h1>Viruses</h1>
        <div className="virusProductsList">
          {viruses.map((virus) => {
            return (
              <div key={`virusId-${virus.id}`} style={{ position: 'relative' }}>
                <Link className="virusItem" href={`/viruses/${virus.id}`}>
                  <img src={`viruses/${virus.image}`} alt={virus.virusName} />
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
                  <h2>{virus.virusName}</h2>
                  {virus.tagline ? <h3>({virus.tagline})</h3> : null}
                  <div className="itemPrice">
                    € {Number(virus.price).toFixed(2)}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
