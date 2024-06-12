const express = require('express');
const { handlerAllGetUsers, handlerCreateNewUser, handlerGetSingleUser, handlerDeleterSingleUser, handlerUpdateUser } = require('../controllers/user');
const router = express.Router();

router.get('/',handlerAllGetUsers);
router.post('/',handlerCreateNewUser);

router.route('/:id')
.get(handlerGetSingleUser)
.delete(handlerDeleterSingleUser)
.patch(handlerUpdateUser)

module.exports = router;