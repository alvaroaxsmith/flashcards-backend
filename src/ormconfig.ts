import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { createDatabase, runSeeders } from 'typeorm-extension';
import { Flashcard } from './entities/flashcard.entity';
import { Deck } from './entities/deck.entity';

config(); // Read .env file

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT, 10),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [Flashcard, Deck],
  migrations: [__dirname + '/migrations/*.ts'],
  synchronize: false,
});

const setup = async () => {
  await createDatabase({ ifNotExist: true, options: AppDataSource.options });
  await AppDataSource.initialize();
  await runSeeders(AppDataSource);
};

setup();
