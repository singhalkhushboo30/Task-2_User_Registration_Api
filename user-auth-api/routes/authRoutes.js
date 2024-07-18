const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const authController = require('../controllers/authController');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/home', authMiddleware, authController.home);

module.exports = router;