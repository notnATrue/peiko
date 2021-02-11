'use strict';

import { News } from './model';
import { ICreateNews, IUpdateNews, IFindOneNews, IDeleteNews, IDocument } from './interface';

export class NewsService {
	async create(params: ICreateNews): Promise<IDocument> {
		const doc = await News.create(params);

		return doc as IDocument;
	}

	async update(params: IUpdateNews): Promise<IDocument> {
		const { id, ...rest } = params;
		const doc = await News.findByIdAndUpdate(id, { $set: { ...rest } }, { new: true }).exec();

		return doc as IDocument;
	}

	async findOne(params: IFindOneNews): Promise<IDocument> {
		const { id } = params;
		const doc = await News.findById(id).exec();

		return doc as IDocument;
	}

	async findAll(): Promise<IDocument[]> {
		const docs = await News.find({}).exec();

		return docs as IDocument[];
	}

	async delete(params: IDeleteNews): Promise<IDocument> {
		const { id } = params;
		const doc = await News.findByIdAndDelete(id).exec();

		return doc as IDocument;
	}
}