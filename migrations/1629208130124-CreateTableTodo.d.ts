import { MigrationInterface, QueryRunner } from "typeorm";
export declare class CreateTableTodo1629208130124 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
