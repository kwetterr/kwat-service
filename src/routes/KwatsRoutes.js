const express = require('express');
const router = express.Router();

const kwatController = require('../controllers/KwatController');

router.post('/create', kwatController.createKwat);
router.get('/:id', kwatController.getKwat);
router.put('/:id', kwatController.updateKwat);
router.delete('/:id', kwatController.deleteKwat);
router.get('/:userId', kwatController.getNewsfeed);
router.get('/:userId', kwatController.getMentions);
router.get('/:userId', kwatController.getTrending);

module.exports = router;

