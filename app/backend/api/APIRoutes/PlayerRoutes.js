const express = require('express');

const PlayerDAO = require('../db/PlayerDAO.js');
const Player = require('../models/Player.js');

const MapAPIRouter = express.Router();
MapAPIRouter.use( express.json() );

MapAPIRouter.get('/players', (req, res) => {
    PlayerDAO.getPlayers().then( players => {
        res.json( players );
    })
    .catch( err => {
        res.status(500).json({error:err, message: 'Error with GET request to /players'});
    });
});

MapAPIRouter.post('/players', (req, res) => {
    const player = new Player( req.body );
    PlayerDAO.createPlayer( player ).then( r => {
        res.json( r );
    })
    .catch( err => {
        res.status(500).json({error:err, message: 'Error with POST request to /players'});
    });
});

module.exports = MapAPIRouter;