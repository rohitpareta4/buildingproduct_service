import { Router } from "express";
import { signup,login,me } from "../controllers/authc.js";
import { protectRoute } from "../middleware.js/authmiddleware.js";

const router=Router()

router.post('/signup',protectRoute,signup)
router.post('/login',protectRoute,login)
router.get('/me',protectRoute,me)

export default router