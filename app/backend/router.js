const express = require('express');
const router = express.Router();

const frontendRouter = require('./frontendRoutes.js');
const ObjectAPIRouter = require('./api/APIRoutes/MyObjectRoutes.js');

router.use( frontendRouter );
router.use('/api', ObjectAPIRouter);

module.exports = router;