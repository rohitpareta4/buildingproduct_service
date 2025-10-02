import { Router } from "express";
import { signup,login,me,signupH,loginH,userme,editprofile } from "../controllers/authc.js";
import { protectRoute,protectHospitalRoute } from "../middleware.js/authmiddleware.js";
import upload from "../config/multerConfig.js";

const router=Router()

router.post('/signup',signup)
router.post('/login',login)
router.get('/me',protectRoute,me)
router.post('/signupH',signupH)
router.post('/loginH',loginH)
router.get('/meH',protectHospitalRoute,userme)
router.post('/editprofile',protectHospitalRoute,upload.single("profilepic"),editprofile)

export default router