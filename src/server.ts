import express from 'express'
import 'dotenv/config'
import router from "./router";
import { conectionDB } from './config/db';
const app = express();
conectionDB();

app.use(express.json())
app.use('/', router);

export default app