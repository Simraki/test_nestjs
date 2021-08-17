"use strict";
const config = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'mysql',
    password: 'mysql',
    database: 'trainee_db',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: false,
    migrationsRun: false,
    logging: true,
    logger: 'file',
    migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
    cli: {
        migrationsDir: 'migrations',
    },
};
module.exports = config;
//# sourceMappingURL=ormconfig.js.map