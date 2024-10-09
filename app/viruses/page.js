import Link from 'next/link';
import { viruses } from '../../database/viruses';

export default async function Viruses() {
  return (
    <>
      <h1 className="virusProducts">Viruses</h1>
      <div className="virusContainer">
        {viruses.map((virus) => {
          return (
            <div
              className="virusItem"
              key={`virusId-${virus.id}`}
              style={{ backgroundImage: `url(viruses/${virus.image})` }}
            >
              <Link href={`/viruses/${virus.id}`}>
                <h2>{virus.name}</h2>
              </Link>
              <div>{virus.price}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}
