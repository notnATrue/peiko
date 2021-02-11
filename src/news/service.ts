'use strict';

import { News } from './model';

export class NewsService {
	async create(params): Promise<any> {
		const doc = await News.create(params);

		return doc;
	}

	async update(params): Promise<any> {
		const { id, ...rest } = params;
		const doc = await News.findByIdAndUpdate(id, { $set: { ...rest } }, { new: true }).exec();

		return doc;
	}

	async findOne(params): Promise<any> {
		const { id } = params;
		const doc = await News.findById(id).exec();

		return doc;
	}

	async findAll(): Promise<any> {
		const docs = await News.find({}).exec();

		return docs;
	}

	async delete(params): Promise<any> {
		const { id } = params;
		const doc = await News.findByIdAndDelete(id).exec();

		return doc;
	}
}