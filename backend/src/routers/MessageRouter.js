import express from "express";
import {
  deleteMessage,
  getMessages,
  sendMessage,
} from "../model/message/messageModel.js";
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const result = await getMessages();
    res.json({
      status: "success",
      message: "response from get method , message router",
      result,
    });
  } catch (error) {
    next(error);
  }
});
router.post("/", async (req, res, next) => {
  try {
    const result = await sendMessage(req.body);
    res.json({
      status: "success",
      message: "response from post method , message router",
      result,
    });
  } catch (error) {
    next(error);
  }
});
router.delete("/:_id", async(req, res, next) => {
  try {
    const { _id } = req.params;
    const result = await deleteMessage(_id);
    res.json({
      status: "success",
      message: "response from delete method , message router",
    });
  } catch (error) {
    next(error);
  }
});
export default router;
