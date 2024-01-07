import { NextFunction, Response, Request } from "express";
import multer from "multer";

var cloudinary = require("cloudinary").v2;

const cloud_name = process.env.CLOUD_NAME;
const api_key = process.env.API_KEY;
const api_secret = process.env.API_SECRET;

cloudinary.config({
  cloud_name: cloud_name,
  api_key: api_key,
  api_secret: api_secret,
});

export const multerRef = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 },
});

const uploadImageMiddleWare = (req: any, res: Response, next: NextFunction) => {
  const { file } = req;
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({ format: "png" }, (err, res) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          req.body.profile_pic = res.url;
          resolve(res.url);
          next();
        }
      })
      .end(file?.buffer);
  });
};

export default uploadImageMiddleWare;
