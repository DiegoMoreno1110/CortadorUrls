const router = require('express').Router();
const { createUrl, getOneUrl } = require('../controllers/UrlController');


router.route('/').post(createUrl);
router.route('/:id').get(getOneUrl);

module.exports = router;
