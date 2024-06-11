import express from "express";
import OuvrageController from "./controller/OuvrageController.js";
import UserController from "./controller/UserController.js";
import ReservationController from "./controller/ReservationController.js";
import LendingController from "./controller/LendingController.js";
import verifyToken from "./model/service/verifyToken.js";
import authController from "./controller/AuthController.js";
import isAdmin from "./controller/isAdmin.js";

const router = express.Router();

router.post("/login", authController.login);
router.get("/logout", authController.logout);
router.get("/info", verifyToken, authController.info);

// CRUD Ouvrage
router.get("/ouvrage", OuvrageController.read);
router.get("/ouvrage/:id", OuvrageController.readById);
router.get("/ouvrage/:field/:value", OuvrageController.readByField);
router.post("/ouvrage", verifyToken, isAdmin, OuvrageController.create);
router.put("/ouvrage/:id", verifyToken, isAdmin, OuvrageController.update);
router.delete("/ouvrage/:id", verifyToken, OuvrageController.deleteById);

// CRUD User
router.get("/user", verifyToken, isAdmin, UserController.read);
router.get("/user/:id", verifyToken, UserController.readById);
router.get("/user/:field/:value", verifyToken, UserController.readByField);
router.post("/user", authController.register);
router.put("/user/:id", verifyToken, UserController.update);
router.delete("/user/:id", verifyToken, UserController.deleteById);

// CRUD Reservation
router.get("/reservation", ReservationController.read);
router.get("/reservation/:id", ReservationController.readById);
router.get("/reservation/:field/:value", ReservationController.readByField);
router.post("/reservation", ReservationController.create);
router.put("/reservation/:id", ReservationController.update);
router.delete("/reservation/:id", ReservationController.deleteById);

// CRUD Lending
router.get("/lending", LendingController.read);
router.get("/lending/:id", LendingController.readById);
router.get("/lending/:field/:value", LendingController.readByField);
router.post("/lending", LendingController.create);
router.put("/lending/:id", LendingController.update);
router.delete("/lending/:id", LendingController.deleteById);

export default router;
