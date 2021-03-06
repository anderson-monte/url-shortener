import mongoose from "mongoose";
import { config } from "../config/constants.config";

class MongoConnection {
	public async connect(): Promise<void> {
		try {
			await mongoose.connect(config.MONGO_CONNECTION);
			console.log("Database connected");
		} catch (e) {
			console.error(e.message);
			this.connect();
		}
	}
}

export const database = new MongoConnection();
