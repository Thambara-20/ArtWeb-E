import express from "express";
import { getItem, getItems, saveItem } from "../controllers/itemcontroller.js";
const router = express.Router();

router.get("/items/type/:type", getItem);
router.get("/items", getItems);

// router.get('items/:id',getuserByID)
router.post("/items", saveItem);
// router.patch('items/:id',updateUser)

export default router;
