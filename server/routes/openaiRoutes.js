import express from "express";
import {
  summaryController,
  paragraphController,
  chatbotController,
  jsconverterController,
  scifiImageController,
} from "../controllers/openaiController.js";

const router = express.Router();

//route
router.post("/summary", summaryController);
router.post("/paragraph", paragraphController);
router.post("/chatbot", chatbotController);
router.post("/js-converter", jsconverterController);
router.post("/scifi-image", scifiImageController);

export default router