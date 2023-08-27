import express from "express";
import {getUser,removeUser,subscribe,unsubscribe,update} from '../controllers/Users.js'
import { verifyToken } from "../Verify.js";
const router = express.Router();

router.put("/:id",update);
router.get("/find/:id",getUser)
router.put("/unsubscribe/:id",unsubscribe)
router.delete("/delete/:id",removeUser)
router.put("/subscribe/:id",subscribe)
export default router;