import createHttpError from "http-errors";
import multer from "multer";

const allowedImageTypes = new Set(["image/jpeg", "image/png", "image/webp"]);
const maxImageSize = 2 * 1024 * 1024;

export const uploadImage = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: maxImageSize,
    files: 1,
  },
  fileFilter: (req, file, cb) => {
    if (!allowedImageTypes.has(file.mimetype)) {
      cb(createHttpError(415, "Only JPG, PNG and WEBP images are allowed."));
      return;
    }

    cb(null, true);
  },
});
