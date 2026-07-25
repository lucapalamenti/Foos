const mariadb = require('mariadb');

/**
 * @type {import('mariadb').Pool}
 */
let pool;

exports.getDatabaseConnection = () => {
    if ( !pool ) {
        pool = mariadb.createPool({
            // THESE WOULD USUALLY BE PLACED IN A .env FILE
            host: "database",
            port: 3306,
            user: "root",
            password: "password",
            database: "foosDatabase",
            charset: "utf8mb4"
        });
    }
    return pool;
};

/**
 * Querys the database
 * @param {String} query An SQL query
 * @param {*} params 
 * @returns 
 */
exports.query = (query, params = []) => {
    const pool = exports.getDatabaseConnection();
    return pool.query(query, params).catch(err => {
        console.log( err );
        throw err; 
    });
};

exports.close = () => {
    if( pool ) {
        pool.end();
        pool = null;
    }
};