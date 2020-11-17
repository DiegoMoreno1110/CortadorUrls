const router = require('express').Router();
const { createUrl, getOneUrl, updateCounter } = require('../controllers/UrlController');


router.route('/').post(createUrl);
router.route('/:id').get(getOneUrl).post(updateCounter);
router.route('/estadistica/:id').get(getOneUrl);

module.exports = router;
