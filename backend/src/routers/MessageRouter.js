import express from "express";
import { sendMessage } from "../model/message/messageModel.js";
const router = express.Router();

router.get("/message", (req, res, next) =>{
    try {
        res.json({
            status: "success",
            message:"response from get method , message router"
})        
    } catch (error) {
        next(error)
    }
})
router.post("/message", async(req, res, next) => {
  try {
    const result = await sendMessage(req.body);
    res.json({
      status: "success",
      message: "response from post method , message router",
    });
  } catch (error) {
    next(error);
  }
});
router.delete("/message", (req, res, next) => {
  try {
    res.json({
      status: "success",
      message: "response from delete method , message router",
    });
  } catch (error) {
    next(error);
  }
});
export default router;