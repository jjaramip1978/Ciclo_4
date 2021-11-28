const {Router} = require('express');
const authController = require('../controllers/authController')

const router = Router();

router.post("/signUp",authController.signUp)
router.post("/login",authController.Login)
router.post("logout",authController.Logout)

module.exports = router;