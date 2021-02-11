'use strict';

import { Document } from "mongoose";

export interface ICreateNews {
	title: string;
	description: string;
	tags: string[];
	createdAt: Date;
	updatedAt: Date;
}

export interface IDocument extends ICreateNews, Document {}