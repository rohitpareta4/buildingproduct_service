import { Router } from "express";
import { getuserinfo,bot_response,getbot_response,deletechat } from "../controllers/userc.js";

const router=Router()

router.get('/getuserinfo',getuserinfo)
router.post('/userquery',bot_response)
router.get('/getbotresponse',getbot_response)
router.post('/deletethechat/:id',deletechat)

export default router