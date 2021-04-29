const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/sujet');

router.post('/create', userCtrl.create);
router.get('/getAllSujets', userCtrl.getAllSujets);
router.post('/getOneSujet', userCtrl.getOneSujet);

module.exports = router;