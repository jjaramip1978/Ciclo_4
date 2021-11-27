const {Router} = require('express');
const authController = require('../controllers/authController')

const router = Router();

router.post("/signup",authController.postSignup)
router.post("/login",authController.postLogin)
router.post("logout",authController.postLogout)