const express = require('express');
const frontendRouter = express.Router();

// Designate the static folder as serving static resources
frontendRouter.use(express.static('frontend/static'));

const templates_dir = "/app/frontend/templates/";

frontendRouter.get('/', (req, res) => {
    res.sendFile(`${templates_dir}index.html`);
});

module.exports = frontendRouter;