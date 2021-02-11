'use strict';

import express from 'express';
import bodyParser from "body-parser";
import DataBase from './db/connection';
import addNewsRoute from './routes/add.news.route';
import updateNewsRoute from './routes/update.news.route';
import findOneNewsRoute from './routes/findOne.news.route';
import findAllNewsRoute from './routes/findAll.news.route';
import deleteNewsRoute from './routes/delete.news.route';

const dataBase = new DataBase();

const server = async () => {
	const app = express();
	app.use(bodyParser());
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));

	await dataBase.connect();
	app.post('/news', addNewsRoute);
	app.put('/news', updateNewsRoute);
	app.get('/news/', findAllNewsRoute);
	app.get('/news/:id', findOneNewsRoute);
	app.delete('/news/:id', deleteNewsRoute);
	app.listen(3000);
};

server();
