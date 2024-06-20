import * as express from "express";
import { getDoctorsList } from "./controller/doctorsController";
const router = express.Router();

router.get("/", getDoctorsList);

export { router as doctorRouter };
