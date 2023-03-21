
import { MigrationInterface, QueryRunner, Table } from 'typeorm';



export class ArticleTable1679410861346 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'article',
              columns: [
                {
                  name: 'id',
                  type: 'int4',
                  isPrimary: true,
                  isGenerated: true,
                  generationStrategy: 'increment',
                },
                {
                  name: 'title',
                  type: 'varchar',
                  isNullable: false,
                },
                {
                  name: 'content',
                  type: 'varchar',
                  isNullable: false,
                },
              ],
            }),
            false,
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`DROP TABLE article`);
    }

}
