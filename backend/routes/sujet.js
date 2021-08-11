const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/sujet');

router.post('/createSujet', userCtrl.createSujet);
router.get('/getAllSujets', userCtrl.getAllSujets);
router.post('/getOneSujet', userCtrl.getOneSujet);
router.post('/createMessage', userCtrl.createMessage);
router.post('/getAllMessages', userCtrl.getAllMessages);
router.post('/countMessages', userCtrl.countMessages);

module.exports = router;