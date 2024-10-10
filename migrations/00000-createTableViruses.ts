import { Sql } from 'postgres';

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE viruses (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      virus_name varchar(60) NOT NULL,
      image varchar(60),
      price decimal NOT NULL,
      tagline varchar(300),
      virus_desc text
    )
  `;
}

export async function down(sql: Sql) {
  await sql`DROP TABLE viruses;`;
}
