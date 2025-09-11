import { Router } from "express";
import { signup,login,me,signupH,loginH,userme } from "../controllers/authc.js";
import { protectRoute,protectHospitalRoute } from "../middleware.js/authmiddleware.js";

const router=Router()

router.post('/signup',signup)
router.post('/login',login)
router.get('/me',protectRoute,me)
router.post('/signupH',signupH)
router.post('/loginH',loginH)
router.get('/meH',protectHospitalRoute,userme)

export default router