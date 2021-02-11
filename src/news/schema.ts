'use strict';

import { Schema } from "mongoose";

export const NewsSchema: Schema = new Schema({
	title: String,
	description: String,
	tags: Array,
}, { timestamps: true });

NewsSchema.index({ createdAt: 1 });
NewsSchema.index({ updatedAt: 1 });

export default NewsSchema;
