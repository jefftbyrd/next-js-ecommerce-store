// import 'server-only';
import { cache } from 'react';
import { sql } from './connect';

// export const viruses = [
//   {
//     id: 1,
//     virus_name: 'Adenovirus',
//     price: '1200,00',
//     tagline: 'This is the tagline',
//     image: 'Adenovirus.png',
//     desc: 'Adenoviruses (members of the family Adenoviridae) are medium-sized (90–100 nm), nonenveloped (without an outer lipid bilayer) viruses with an icosahedral nucleocapsid containing a double-stranded DNA genome.Their name derives from their initial isolation from human adenoids in 1953.',
//   },
//   {
//     id: 2,
//     virus_name: 'Escherichia T4',
//     price: '1350,00',
//     tagline: 'This is the tagline',
//     image: 'Bacteriophage-T4.png',
//     desc: 'Escherichia virus T4 is a species of bacteriophages that infect Escherichia coli bacteria. It is a double-stranded DNA virus in the subfamily Tevenvirinae of the family Straboviridae. T4 is capable of undergoing only a lytic life cycle and not the lysogenic life cycle. The species was formerly named T-even bacteriophage, a name which also encompasses, among other strains (or isolates), Enterobacteria phage T2, Enterobacteria phage T4 and Enterobacteria phage T6.',
//   },
//   {
//     id: 3,
//     virus_name: 'Cowpea Mosaic Virus',
//     price: '990,00',
//     tagline: 'This is the tagline',
//     image: 'CowpeaMosaicVirus.png',
//     desc: 'Cowpea mosaic virus (CPMV) is a non-enveloped plant virus of the comovirus group. Infection of a susceptible cowpea leaf causes a "mosaic" pattern in the leaf, and results in high virus yields (1-2 g/kg). Its genome consists of 2 molecules of positive-sense RNA (RNA-1 and RNA-2) which are separately encapsidated. Both RNA1 and RNA2 have a VPg (virus genome-linked protein) at the end, and polyadenylation at the end. Genomic RNA1 and RNA2 are expressed by a polyprotein processing strategy. RNA1 encodes helicase, VPg, protease and RdRp. RNA2 encodes movement protein and coat protein. The virus particles are 28 nm in diameter and contain 60 copies each of a Large (L) and Small (S) coat protein. The structure is well characterised to atomic resolution, and the viral particles are thermostable. The identification of the virus is attributed to Lister and Thresh in 1955, but it is now known as a variant of the Sunn-hemp mosaic virus.',
//   },
//   {
//     id: 4,
//     virus_name: 'HSV-1 (Herpes Simplex)',
//     price: '399,99',
//     tagline: 'This is the tagline',
//     image: 'HSV-1.png',
//     desc: 'Herpes simplex virus 1 (cold sores) and 2 (genital herpes) (HSV-1 and HSV-2), also known by their taxonomic names Human alphaherpesvirus 1 and Human alphaherpesvirus 2, are two members of the human Herpesviridae family, a set of viruses that produce viral infections in the majority of humans. Both HSV-1 and HSV-2 are very common and contagious. They can be spread when an infected person begins shedding the virus.',
//   },
//   {
//     id: 5,
//     virus_name: 'Faustovirus',
//     price: '999,00',
//     tagline: 'This is the tagline',
//     image: 'Faustovirus.png',
//     desc: 'Faustovirus is a genus of giant virus which infects amoebae associated with humans. The virus was first isolated in 2015 and shown to be around 0.2 micrometers in diameter with a double stranded DNA genome of 466 kilobases predicted to encode 451 proteins. Although classified as a nucleocytoplasmic large DNA virus (NCLDV), faustoviruses share less than a quarter of their genes with other NCLDVs; however, ~46% are homologous to bacterial genes and the remainder are orphan genes (ORFans). Specifically, the gene encoding the major capsid protein (MCP) of faustovirus is different than that of its most closely related giant virus, asfivirus, as well as other NCLDVs. In asfivirus, the gene encoding MCP is a single genomic fragment of ~2000 base pairs (bp), however, in faustovirus the MCP is encoded by 13 exons separated by 12 large introns.The exons have a mean length of 149 bp and the introns have a mean length of 1,273 bp. The presence of introns in faustovirus genes is highly unusual for viruses.',
//   },
//   {
//     id: 6,
//     virus_name: 'Rhinovirus',
//     price: '777,00',
//     tagline: 'This is the tagline',
//     image: 'Rhinovirus.png',
//     desc: 'The rhinovirus (from the Ancient Greek: ῥίς, romanized: rhis "nose", gen ῥινός, romanized: rhinos "of the nose", and the Latin: vīrus) is a positive-sense, single-stranded RNA virus belonging to the genus Enterovirus in the family Picornaviridae. Rhinovirus is the most common viral infectious agent in humans and is the predominant cause of the common cold.',
//   },
// ];

type Virus = {
  id: number;
  virus_name: string;
  image: string;
  price: number;
  virus_desc: string;
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

export function getViruses() {
  return viruses;
}

export function getVirus(id) {
  return viruses.find((virus) => virus.id === id);
}
