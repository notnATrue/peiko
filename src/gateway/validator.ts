import Joi from "joi";
import _ from "lodash";
import {
  IAddNews, IUpdateNews, IFindOneNews, IDeleteNews,
} from "./interface";

export class Validator {
  public static async addNews(params: IAddNews): Promise<void> {
    const schema = Joi.object().keys({
			title: Joi.string().required(),
			description: Joi.string().required(),
			tags: Joi.array().items(
				Joi.string(),
			),
    });
    const { error } = schema.validate(params);
    if (error) {
      throw new Error(JSON.stringify(error));
    }
  }

  public static async updateNews(params: IUpdateNews): Promise<void> {
    const schema = Joi.object().keys({
			id: Joi.string().hex().length(24).required(),
			title: Joi.string(),
			description: Joi.string(),
			tags: Joi.array().items(
				Joi.string(),
			),
    });
    const { error } = schema.validate(params);
    if (error) {
      throw new Error(JSON.stringify(error));
    }
  }

  public static async findOneNews(params: IFindOneNews): Promise<void> {
    const schema = Joi.object().keys({
			id: Joi.string().hex().length(24).required(),
    });
    const { error } = schema.validate(params);
    if (error) {
      throw new Error(JSON.stringify(error));
    }
  }

  public static async deleteNews(params: IDeleteNews): Promise<void> {
		const schema = Joi.object().keys({
			id: Joi.string().hex().length(24).required(),
    });
    const { error } = schema.validate(params);
    if (error) {
      throw new Error(JSON.stringify(error));
    }
  }
}
