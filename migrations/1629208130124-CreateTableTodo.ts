import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTableTodo1629208130124 implements MigrationInterface {
    name = 'CreateTableTodo1629208130124'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`trainee_db\`.\`todo\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`desc\` varchar(255) NOT NULL DEFAULT '', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`trainee_db\`.\`todo\``);
    }

}
