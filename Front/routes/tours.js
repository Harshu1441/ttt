import express from "express"
import { createTour, deleteTour, getAllTour, getRelatedTour, getSingleTour, updateTour } from "./../controllers/tourController.js"
import { verifyAdmin } from "../utils/verifyToken.js"

const router=express.Router()

router.post("/",verifyAdmin,createTour)//Create New tour
router.put("/:id",verifyAdmin,updateTour)//Update tour
router.delete('/:id',verifyAdmin,deleteTour)//Delete Tour
router.get("/:id",getSingleTour)//get 1 tour
router.get("/search/getRelatedTour",getRelatedTour)//get packages
router.get('/',getAllTour)//get All tours

export default router;