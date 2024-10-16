import { Sql } from 'postgres';

export const viruses = [
  {
    id: 1,
    virus_name: 'Adenovirus',
    image: 'adv-d26.webp',
    price: 1200.0,
    tagline: 'This is the tagline',
    virus_desc:
      'Adenoviruses (members of the family Adenoviridae) are medium-sized (90–100 nm), nonenveloped (without an outer lipid bilayer) viruses with an icosahedral nucleocapsid containing a double-stranded DNA genome.Their name derives from their initial isolation from human adenoids in 1953.',
  },
  {
    id: 2,
    virus_name: 'Escherichia T4',
    image: 'escherichia-t4.webp',
    price: 1350.0,
    tagline: 'This is the tagline',
    virus_desc:
      'Escherichia virus T4 is a species of bacteriophages that infect Escherichia coli bacteria. It is a double-stranded DNA virus in the subfamily Tevenvirinae of the family Straboviridae. T4 is capable of undergoing only a lytic life cycle and not the lysogenic life cycle. The species was formerly named T-even bacteriophage, a name which also encompasses, among other strains (or isolates), Enterobacteria phage T2, Enterobacteria phage T4 and Enterobacteria phage T6.',
  },
  {
    id: 3,
    virus_name: 'Cowpea Mosaic Virus',
    image: 'cowpea-mosaic-virus.webp',
    price: 990.0,
    tagline: 'This is the tagline',
    virus_desc:
      'Cowpea mosaic virus (CPMV) is a non-enveloped plant virus of the comovirus group. Infection of a susceptible cowpea leaf causes a "mosaic" pattern in the leaf, and results in high virus yields (1-2 g/kg). Its genome consists of 2 molecules of positive-sense RNA (RNA-1 and RNA-2) which are separately encapsidated. Both RNA1 and RNA2 have a VPg (virus genome-linked protein) at the end, and polyadenylation at the end. Genomic RNA1 and RNA2 are expressed by a polyprotein processing strategy. RNA1 encodes helicase, VPg, protease and RdRp. RNA2 encodes movement protein and coat protein. The virus particles are 28 nm in diameter and contain 60 copies each of a Large (L) and Small (S) coat protein. The structure is well characterised to atomic resolution, and the viral particles are thermostable. The identification of the virus is attributed to Lister and Thresh in 1955, but it is now known as a variant of the Sunn-hemp mosaic virus.',
  },
  {
    id: 4,
    virus_name: 'HSV-1 (Herpes Simplex)',
    image: 'hsv-1.webp',
    price: 399.99,
    tagline: 'This is the tagline',
    virus_desc:
      'Herpes simplex virus 1 (cold sores) and 2 (genital herpes) (HSV-1 and HSV-2), also known by their taxonomic names Human alphaherpesvirus 1 and Human alphaherpesvirus 2, are two members of the human Herpesviridae family, a set of viruses that produce viral infections in the majority of humans. Both HSV-1 and HSV-2 are very common and contagious. They can be spread when an infected person begins shedding the virus.',
  },
  {
    id: 5,
    virus_name: 'Faustovirus',
    image: 'faustovirus.webp',
    price: 999.0,
    tagline: 'This is the tagline',
    virus_desc:
      'Faustovirus is a genus of giant virus which infects amoebae associated with humans. The virus was first isolated in 2015 and shown to be around 0.2 micrometers in diameter with a double stranded DNA genome of 466 kilobases predicted to encode 451 proteins. Although classified as a nucleocytoplasmic large DNA virus (NCLDV), faustoviruses share less than a quarter of their genes with other NCLDVs; however, ~46% are homologous to bacterial genes and the remainder are orphan genes (ORFans). Specifically, the gene encoding the major capsid protein (MCP) of faustovirus is different than that of its most closely related giant virus, asfivirus, as well as other NCLDVs. In asfivirus, the gene encoding MCP is a single genomic fragment of ~2000 base pairs (bp), however, in faustovirus the MCP is encoded by 13 exons separated by 12 large introns.The exons have a mean length of 149 bp and the introns have a mean length of 1,273 bp. The presence of introns in faustovirus genes is highly unusual for viruses.',
  },
  {
    id: 6,
    virus_name: 'Rhinovirus',
    image: 'rhinovirus.webp',
    price: 777.0,
    tagline: 'This is the tagline',
    virus_desc:
      'The rhinovirus (from the Ancient Greek: ῥίς, romanized: rhis "nose", gen ῥινός, romanized: rhinos "of the nose", and the Latin: vīrus) is a positive-sense, single-stranded RNA virus belonging to the genus Enterovirus in the family Picornaviridae. Rhinovirus is the most common viral infectious agent in humans and is the predominant cause of the common cold.',
  },
  {
    id: 7,
    virus_name: 'Simian Virus (SV40)',
    image: 'simian.webp',
    price: 899.0,
    tagline: 'This is the tagline',
    virus_desc:
      'A polyomavirus that is found in both monkeys and humans. Like other polyomaviruses, SV40 is a DNA virus that sometimes causes tumors in animals, but most often persists as a latent infection. SV40 has been widely studied as a model eukaryotic virus, leading to many early discoveries in eukaryotic DNA replication and transcription.',
  },
  {
    id: 8,
    virus_name: 'Zika Virus',
    image: 'zika.webp',
    price: 960.0,
    tagline: 'This is the tagline',
    virus_desc:
      'Zika virus is a member of the virus family Flaviviridae. It is spread by daytime-active Aedes mosquitoes, such as A. aegypti and A. albopictus. Its name comes from the Ziika Forest of Uganda, where the virus was first isolated in 1947.[6] Zika virus shares a genus with the dengue, yellow fever, Japanese encephalitis, and West Nile viruses.Since the 1950s, it has been known to occur within a narrow equatorial belt from Africa to Asia. From 2007 to 2016, the virus spread eastward, across the Pacific Ocean to the Americas, leading to the 2015–2016 Zika virus epidemic.',
  },
];

export async function up(sql: Sql) {
  for (const virus of viruses) {
    await sql`
      INSERT INTO
        viruses (
          virus_name,
          image,
          price,
          tagline,
          virus_desc
        )
      VALUES
        (
          ${virus.virus_name},
          ${virus.image},
          ${virus.price},
          ${virus.tagline},
          ${virus.virus_desc}
        )
    `;
  }
}

export async function down(sql: Sql) {
  for (const virus of viruses) {
    await sql`
      DELETE FROM viruses
      WHERE
        id = ${virus.id}
    `;
  }
}
