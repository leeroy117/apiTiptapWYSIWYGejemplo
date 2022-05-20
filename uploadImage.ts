import { Router, Request, Response } from 'express';
import multer from "multer";

const router = Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.jpg')
    }
})

const upload = multer({ storage: storage })

router.post('', upload.single('myImage'), (req: Request, res: Response) => {
    const file = req.file;
    res.send(file);
});


export { router as RouterUploadImage };