const database = require('./databaseConnections.js');

const Player = require('../models/Player.js');

// ----- <<<<< GET/SELECT QUERIES >>>>> -----

/**
 * @returns {Promise<Array<Player>>}
 */
const getPlayers = async () => {
    let query = "SELECT * FROM player;";
    return await database.query( query, []).then( rows => {
        return rows.map( row => new Player( row ) );
    });
};

// ----- <<<<< POST/INSERT QUERIES >>>>> -----

/**
 * @param {MMap} map 
 * @returns {Promise<*>}
 */
const createPlayer = async ( player ) => {
    const query = `
        INSERT INTO player (player_firstname, player_lastname, player_shortname, player_elo)
        VALUES (?, ?, ?, ?);
        `;
    const params = [player.player_firstname, player.player_lastname, player.player_shortname, player.player_elo];
    return await database.query( query, params ).then( async rows => {
        if ( rows.affectedRows !== 1 ) {
            throw new Error("Player could not be created!");
        }
    });
};

// ----- <<<<< PUT/UPDATE QUERIES >>>>> -----

// ----- <<<<< DELETE QUERIES >>>>> -----

module.exports = {
    getPlayers,
    createPlayer
};