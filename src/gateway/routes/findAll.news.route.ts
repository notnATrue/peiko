'use strict';

import { NextFunction, Request, Response } from "express";
import _ from "lodash";
import { NewsService } from "../../news/service";

export const route = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
			const newsService = new NewsService();
			const news = await newsService.findAll();
			const jsonData = [];
			for (const feed of news) {
				const filteredFeed = _.pick(feed, ["id", "title", "description", "tags", "createdAt", "updatedAt"]);
				jsonData.push(filteredFeed);
			}
			res.status(200).json({ code: 200, message: jsonData });
  } catch (e) {
    next(e);
  }
};

export default route;