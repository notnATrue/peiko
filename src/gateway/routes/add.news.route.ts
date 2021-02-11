'use strict';

import { NextFunction, Request, Response } from "express";
import _ from "lodash";
import { NewsService } from "../../news/service";
import { IAddNews } from '../interface';
import { Validator } from '../validator';

export const route = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
			const params = { ...req.params, ...req.query, ...req.body } as IAddNews;
			await Validator.addNews(params);
			const newsService = new NewsService();
			const addNews = await newsService.create(params);
			const jsonData = _.pick(addNews, ["id", "title", "description", "tags", "createdAt", "updatedAt"]);
			res.status(201).json({ code: 201, message: jsonData });
  } catch (e) {
    next(e);
  }
};

export default route;