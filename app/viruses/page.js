import Link from 'next/link';
import { getVirusesInsecure } from '../../database/viruses';

export const metadata = {
  title: 'Viruses',
  description: 'All your favorites in one place!',
};

export default async function Viruses() {
  const viruses = await getVirusesInsecure();

  console.log('viruses', viruses);

  return (
    <div className="virusPage">
      <h1>Viruses</h1>
      <div className="virusProductsList">
        {viruses.map((virus) => {
          return (
            <div className="virusItem" key={`virusId-${virus.id}`}>
              <Link href={`/viruses/${virus.id}`}>
                <div
                  className="inner"
                  style={{
                    backgroundImage: `url(viruses/${virus.image})`,
                  }}
                >
                  <h2>{virus.virusName}</h2>
                  <div className="itemPrice">
                    {Number(virus.price).toFixed(2)}
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
