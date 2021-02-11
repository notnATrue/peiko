'use strict';

import { NextFunction, Request, Response } from "express";
import _ from "lodash";
import { NewsService } from "../news/service";

export const route = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
			const params = { ...req.params, ...req.query, ...req.body };
			const newsService = new NewsService();
			await newsService.delete(params);
			res.status(204).json({ code: 204 });
  } catch (e) {
    next(e);
  }
};

export default route;