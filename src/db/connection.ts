'use strict';

require("dotenv").config();
import mongoose from 'mongoose';

export default class DataBase {
  async connect(): Promise<void> {
		const uri = process.env.MONGO_URI;
    await mongoose.connect(uri, { useNewUrlParser: true , autoIndex: false }).catch((error) => { console.log(error); });
  }
}