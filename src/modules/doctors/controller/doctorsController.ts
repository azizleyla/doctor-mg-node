import { Request, Response } from "express";
import { getAllDoctors } from "../models/getAllDoctors";

export const getDoctorsList = async (req: Request, res: Response) => {
  const result = await getAllDoctors();
  return res.status(200).json(result);

  //   AppSuccess(res, { list: result });
};
