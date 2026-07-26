const express = require('express');
const router = express.Router();

const frontendRouter = require('./frontendRoutes.js');
const ObjectAPIRouter = require('./api/APIRoutes/PlayerRoutes.js');

router.use( frontendRouter );
router.use('/api', ObjectAPIRouter);

module.exports = router;