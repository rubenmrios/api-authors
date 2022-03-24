import { Express, json, urlencoded } from "express";
import logger from 'morgan';
import cors from "cors";

export const setMiddlewateExpress = (express: Express): void => {
    require('dotenv').config({path: __dirname + '/.././.env'})
    express.use(logger('dev'));
    express.use(json());
    express.use(urlencoded({ extended: true }));
    express.use(cors());
};