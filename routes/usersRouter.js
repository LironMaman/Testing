import express from "express";
import {getUserByMail,getAllUsers,insertNewUser, updateUserByMail,deleteUserByMail} from "../controllers/users.js"
const router = express.Router();
router.get("/getUserByMail/:mail",getUserByMail);
router.get("/getAllUsers",getAllUsers);
router.get("/insertNewUser/:mail/:password/:type/:phone?",insertNewUser);
router.get("/updateUserByMail/:mail/:password/:type/:phone?",updateUserByMail);
router.get("/deleteUserByMail/:mail",deleteUserByMail);
export default router;