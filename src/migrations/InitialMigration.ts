import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialMigration1625818278000 implements MigrationInterface {
  name = 'InitialMigration1625818278000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "deck" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_c3ffb85c0c823b2834233019ef0" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "flashcard" ("id" SERIAL NOT NULL, "question" character varying NOT NULL, "answer" character varying NOT NULL, "deckId" integer, CONSTRAINT "PK_a6377fa90d0b616b47bb266b1a3" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "flashcard" ADD CONSTRAINT "FK_aad55ae1f3c1d688f7a7e3c9204" FOREIGN KEY ("deckId") REFERENCES "deck"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "flashcard" DROP CONSTRAINT "FK_aad55ae1f3c1d688f7a7e3c9204"`,
    );
    await queryRunner.query(`DROP TABLE "flashcard"`);
    await queryRunner.query(`DROP TABLE "deck"`);
  }
}
