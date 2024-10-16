// import 'server-only';
import { cache } from 'react';
import { sql } from './connect';

export type Virus = {
  id: number;
  virusName: string;
  image: string | null;
  price: string;
  tagline: string | null;
  virusDesc: string | null;
};

export const getVirusesInsecure = cache(async () => {
  const viruses = await sql<Virus[]>`
    SELECT
      *
    FROM
      viruses
  `;

  return viruses;
});

export const getVirusInsecure = cache(async (id: number) => {
  const [virus] = await sql<Virus[]>`
    SELECT
      *
    FROM
      viruses
    WHERE
      id = ${id}
  `;

  return virus;
});

// export function getViruses() {
//   return viruses;
// }

// export function getVirus(id) {
//   return viruses.find((virus) => virus.id === id);
// }
