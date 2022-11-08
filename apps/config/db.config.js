module.exports = {
    HOST: "localhost",
    USER: "pma",
    PASSWORD: 'Root123',
    DB: 'spk_ahp',
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};