import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { RouterUploadImage } from "./uploadImage";

const cors = require('cors')
dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', RouterUploadImage);
app.use(express.static("uploads"));

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});