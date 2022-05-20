"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouterUploadImage = void 0;
const express_1 = require("express");
const formidable_1 = require("formidable");
const router = (0, express_1.Router)();
exports.RouterUploadImage = router;
router.post('', (req, res) => {
    const form = new formidable_1.IncomingForm();
    form.parse(req);
    console.log(__dirname);
    form.on('fileBegin', function (name, file) {
        file.filepath = __dirname + '/uploads/' + file.originalFilename;
    });
    // form.on('file', function (name, file) {
    //     console.log('Uploaded ' + file.originalFilename);
    // });
    // res.sendFile(__dirname + '/index.html');
    // form.parse(req, (err, fields, file) => {
    //     const oldpath = file.filepath;
    //     console.log(file);
    // })
});
