import { Router } from "express";
import { signup,login,me,signupH,loginH } from "../controllers/authc.js";
import { protectRoute } from "../middleware.js/authmiddleware.js";

const router=Router()

router.post('/signup',signup)
router.post('/login',login)
router.get('/me',protectRoute,me)
router.post('/signupH',signupH)
router.post('/loginH',loginH)

export default router