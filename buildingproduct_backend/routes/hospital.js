import { Router } from "express";
import { protectHospitalRoute } from "../middleware.js/authmiddleware.js";
import { storeAvailablebeds,getAvailablebeds,storeAvailabledoctors,getdoctorslist } from "../controllers/hospitalc.js";


const router=Router()

router.post('/storeAvailablebeds',protectHospitalRoute,storeAvailablebeds)
router.get('/getAvailablebeds',protectHospitalRoute,getAvailablebeds)
router.post('/storeAvailabledoctors',protectHospitalRoute,storeAvailabledoctors)
router.get('/getdoctorslist',protectHospitalRoute,getdoctorslist)

export default router