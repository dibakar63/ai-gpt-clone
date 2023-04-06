import express from 'express'
import { loginController, logoutController, registerController } from '../controllers/authController.js'

//router object
  const router=express.Router()

//routes
//register
router.post('/register',registerController)
//login
router.post('/login',loginController)

//logout
router.post('/logout',logoutController)


//module.exports=router
export default router