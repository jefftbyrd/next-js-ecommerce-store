import Link from 'next/link';
import { getVirusesInsecure } from '../../database/viruses';

export const metadata = {
  title: 'Viruses',
  description: 'All your favorites in one place!',
};

export default async function Viruses() {
  const viruses = await getVirusesInsecure();

  return (
    <>
      <h1 className="virusProducts">Viruses</h1>
      <div className="virusContainer">
        {viruses.map((virus) => {
          return (
            <div
              className="virusItem"
              key={`virusId-${virus.id}`}
              style={{
                backgroundImage: `url(viruses/${virus.image})`,
              }}
              // style={{
              //   backgroundImage: `url(viruses/${virus.virusName.toLowerCase()}.png)`,
              // }}
              // src={`/images/${animal.firstName.toLowerCase()}.webp`}
              // style={{ backgroundImage: `url(viruses/${virus.image})` }}
            >
              <Link href={`/viruses/${virus.id}`}>
                <h2>{virus.virusName}</h2>
              </Link>
              <div>{virus.price}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}
