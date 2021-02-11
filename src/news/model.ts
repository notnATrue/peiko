'use strict';

import { model } from "mongoose";
import { ICreateNews, IDocument } from "./interface";
import NewsSchema from "./schema";

const Model = model<IDocument>(
  "News", NewsSchema, "news",
);

export class News extends Model implements ICreateNews {}
