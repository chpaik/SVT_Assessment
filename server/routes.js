const router = require('express').Router();
const controller = require('./controller');

router.post('/api/robots/closest/', controller.getClosest);

module.exports = router;