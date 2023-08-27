import express from "express";
import {addComment,editComment,deleteComment,getComments} from '../controllers/comment.js'
const router = express.Router();
import { verifyToken } from "../Verify.js";

router.post("/",addComment);
router.put("/:id",editComment);
router.delete("/:id",deleteComment);
router.get("/:VideoId",getComments);
export default router;