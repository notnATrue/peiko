'use strict';

import { Document } from "mongoose";

export interface INews {
	title: string;
	description: string;
	tags?: string[];
	createdAt: Date;
	updatedAt: Date;
}

export interface ICreateNews {
	title: string;
	description: string;
	tags?: string[];
}

export interface IUpdateNews {
	id: string;
	title?: string;
	description?: string;
	tags?: string[];
}

export interface IFindOneNews {
	id: string;
}

export interface IDeleteNews {
	id: string;
}

export interface IDocument extends INews, Document {}