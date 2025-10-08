import { Router } from "express";
import { getuserinfo } from "../controllers/userc.js";

const router=Router()

router.get('/getuserinfo',getuserinfo)

export default router