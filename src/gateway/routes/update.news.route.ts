'use strict';

import { NextFunction, Request, Response } from "express";
import _ from "lodash";
import { NewsService } from "../../news/service";
import { IUpdateNews } from '../interface';

export const route = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
			const params = { ...req.params, ...req.query, ...req.body } as IUpdateNews;
			const newsService = new NewsService();
			const feed = await newsService.update(params);
			const jsonData = _.pick(feed, ["id", "title", "description", "tags", "createdAt", "updatedAt"]);
			res.status(201).json({ code: 201, message: jsonData });
  } catch (e) {
    next(e);
  }
};

export default route;