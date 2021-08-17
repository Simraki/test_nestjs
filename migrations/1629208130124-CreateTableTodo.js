"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableTodo1629208130124 = void 0;
class CreateTableTodo1629208130124 {
    constructor() {
        this.name = 'CreateTableTodo1629208130124';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`trainee_db\`.\`todo\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`desc\` varchar(255) NOT NULL DEFAULT '', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE \`trainee_db\`.\`todo\``);
    }
}
exports.CreateTableTodo1629208130124 = CreateTableTodo1629208130124;
//# sourceMappingURL=1629208130124-CreateTableTodo.js.map