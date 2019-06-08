import express from 'express';
import morgan from 'morgan';
import { logType } from '../config';
import './models/db';

export const app = express();

app.use(morgan(logType));

app.use(express.static('dist'));
