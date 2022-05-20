"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouterUploadImage = void 0;
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const router = (0, express_1.Router)();
exports.RouterUploadImage = router;
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.jpg');
    }
});
const upload = (0, multer_1.default)({ storage: storage });
router.post('', upload.single('myImage'), (req, res) => {
    const file = req.file;
    res.send(file);
});
