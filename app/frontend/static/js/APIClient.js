import HTTPClient from "./HTTPClient.js";

const BASE_API_PATH = "./api";

// ----- PlayerDAO CALLS -----

const getPlayers = async () => {
    const res = await HTTPClient.get( `${BASE_API_PATH}/players` );
    return res.Map( p => new Player( p ) );
};

const createPlayer = async ( playerData ) => {
    return await HTTPClient.post( `${BASE_API_PATH}/players`, playerData );
};

export default {
    getPlayers,
    createPlayer
}