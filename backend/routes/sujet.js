const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/sujet');

router.post('/create', userCtrl.create);
router.get('/getOne', userCtrl.getOne);

module.exports = router;