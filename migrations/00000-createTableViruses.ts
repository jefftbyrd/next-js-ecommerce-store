import { Sql } from 'postgres';

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE viruses (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      virus_name varchar(60) NOT NULL,
      image varchar(60),
      price float NOT NULL,
      tagline varchar(300),
      virus_desc text,
      featured bit,
      new bit,
      realm varchar(300),
      kingdom varchar(300),
      phylum varchar(300),
      class varchar(300),
      v_order varchar(300),
      v_family varchar(300),
      genus varchar(300),
      species varchar(300)
    )
  `;
}

export async function down(sql: Sql) {
  await sql`DROP TABLE viruses;`;
}
