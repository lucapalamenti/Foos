import HTTPClient from "./HTTPClient.js";

import Player from "../js/models/Player.js";

const BASE_API_PATH = "./api";

// ----- PlayerDAO CALLS -----

const getPlayers = async () => {
    return await HTTPClient.get( `${BASE_API_PATH}/players` ).then( players => {
        return players.map( p => new Player( p ) );
    });
};

/**
 * 
 * @param {Player} playerData 
 * @returns 
 */
const createPlayer = async ( playerData ) => {
    return await HTTPClient.post( `${BASE_API_PATH}/players`, playerData );
};

export default {
    getPlayers,
    createPlayer
}