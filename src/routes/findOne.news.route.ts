'use strict';

import { NextFunction, Request, Response } from "express";
import _ from "lodash";
import { NewsService } from "../news/service";

export const route = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
			const params = { ...req.params, ...req.query, ...req.body };
			const newsService = new NewsService();
			const feed = await newsService.findOne(params);
			const jsonData = _.pick(feed, ["id", "title", "description", "tags", "createdAt", "updatedAt"]);
			res.status(200).json({ code: 200, message: jsonData });
  } catch (e) {
    next(e);
  }
};

export default route;