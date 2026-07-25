import HTTPClient from "./HTTPClient.js";

import MyObject from "./models/MyObject.js";

const BASE_API_PATH = "./api";

// ----- MyObjectDAO CALLS -----

const getMyObjects = async () => {
    return await HTTPClient.get( `${BASE_API_PATH}/myobjects` );
};

const createMyObject = async ( myObjectData ) => {
    return await HTTPClient.post( `${BASE_API_PATH}/myobjects`, myObjectData );
};

const deleteMyObject = async ( myObject_id ) => {
    return await HTTPClient.delete( `${BASE_API_PATH}/myobjects/${myObject_id}` );
};

export default {
    getMyObjects,
    createMyObject,
    deleteMyObject,
}