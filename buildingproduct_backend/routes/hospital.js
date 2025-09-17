import { Router } from "express";
import { protectHospitalRoute } from "../middleware.js/authmiddleware.js";
import { storeAvailablebeds,getAvailablebeds,storeAvailabledoctors,getdoctorslist,addAmbulance,getAmbulanceInfo } from "../controllers/hospitalc.js";


const router=Router()

router.post('/storeAvailablebeds',protectHospitalRoute,storeAvailablebeds)
router.get('/getAvailablebeds',protectHospitalRoute,getAvailablebeds)
router.post('/storeAvailabledoctors',protectHospitalRoute,storeAvailabledoctors)
router.get('/getdoctorslist',protectHospitalRoute,getdoctorslist)
router.post('/addAmbulance',protectHospitalRoute,addAmbulance)
router.get('/getAmbulanceInfo',protectHospitalRoute,getAmbulanceInfo)

export default router