import { randomUUID } from "node:crypto";
import mime from "mime";
import multer from "multer";

const generateFileName = (mimeType: string) => {
    const randomFileName = `${randomUUID()}-${Date.now()}`;
    const fileExtension = mime.getExtension(mimeType);
    const filename = randomFileName + "." + fileExtension;
    return filename;
};
const storage = multer.diskStorage({
    destination: "uploads/",
    filename: (req, file, clb) => {
        return clb(null, generateFileName(file.mimetype));
    },
});
const multerOptions = {};

const initMulterMiddleware = () => {
    return multer({ storage, ...multerOptions });
};

export { multerOptions, initMulterMiddleware };
