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
    const p = new Player( req.body );
    PlayerDAO.createPlayer( p ).then( r => {
        res.json({message: `Player created with ID ${r}`});
    })
    .catch( err => {
        res.status(500).json({error:err, message: 'Error with POST request to /players'});
    });
});

module.exports = MapAPIRouter;