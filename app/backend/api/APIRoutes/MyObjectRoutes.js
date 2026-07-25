const express = require('express');

const MyObjectDAO = require('../db/MyObjectDAO.js');
const MyObject = require('../models/MyObject.js');

const MapAPIRouter = express.Router();
MapAPIRouter.use( express.json() );

MapAPIRouter.get('/myobjects', (req, res) => {
    MyObjectDAO.getMyObjects().then( objects => {
        res.json( objects );
    })
    .catch( err => {
        res.status(500).json({error:err, message: 'Error with GET request to /myobjects'});
    });
});

MapAPIRouter.post('/myobjects', (req, res) => {
    const myObject = new MyObject( req.body );
    MyObjectDAO.createMyObject( myObject ).then( object => {
        res.json( object );
    })
    .catch( err => {
        res.status(500).json({error:err, message: 'Error with POST request to /myobjects'});
    });
});

MapAPIRouter.delete('/myobjects/:myobjectId', async (req, res) => {

    MyObjectDAO.deleteMyObject( req.params.myobjectId ).catch( err => {
        return res.status(500).json({error:err, message: 'Error with DELETE request to /myobjects/:myobjectId'});
    });

    res.json({message: `Map ${mapId} successfully deleted`});
});




module.exports = MapAPIRouter;