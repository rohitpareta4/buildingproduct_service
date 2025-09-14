import { Router } from "express";
import { protectHospitalRoute } from "../middleware.js/authmiddleware.js";
import { storeAvailablebeds,getAvailablebeds } from "../controllers/hospitalc.js";


const router=Router()

router.post('/storeAvailablebeds',protectHospitalRoute,storeAvailablebeds)
router.get('/getAvailablebeds',protectHospitalRoute,getAvailablebeds)

export default router