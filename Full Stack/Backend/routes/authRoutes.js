const {Router} = require('express');
const authController = require('../controllers/authController')

const router = Router();

router.post("/signUp",authController.signUp)
router.post("/login",authController.Login)
router.post("/logout",authController.Logout)
router.delete("/deleteUser/:email",authController.deleteUser)

module.exports = router;