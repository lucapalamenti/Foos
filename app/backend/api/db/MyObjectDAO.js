const database = require('./databaseConnections.js');

const MyObject = require('../models/MyObject.js');

// ----- <<<<< GET/SELECT QUERIES >>>>> -----

/**
 * @returns {Promise<Array<MMap>>}
 */
const getMyObjects = async (  ) => {
    let query = "SELECT * FROM myObject;";
    return await database.query( query, []).then( rows => {
            return rows.map( row => new MyObject( row ) );
    });
};

// ----- <<<<< POST/INSERT QUERIES >>>>> -----

/**
 * @param {MMap} map 
 * @returns {Promise<MMap>}
 */
const createMyObject = async ( myObject ) => {
    const query = `
        INSERT INTO myObject (\`myObject_id\`)
        VALUES (?);
        `;
    const params = [myObject.myObject_id];
    return await database.query( query, params ).then( async rows => {
        if ( rows.affectedRows !== 1 ) {
            throw new Error("Map could not be created!");
        }
    });
};

// ----- <<<<< PUT/UPDATE QUERIES >>>>> -----

// ----- <<<<< DELETE QUERIES >>>>> -----

/**
 * @param {Number} map_id 
 * @returns 
 */
const deleteMyObject = async ( myObject_id ) => {
    return await database.query(`
        DELETE FROM map
        WHERE myObject_id = ?;
        `, [myObject_id]);
};

module.exports = {
    getMyObjects,
    createMyObject,
    deleteMyObject
};