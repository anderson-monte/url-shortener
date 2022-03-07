import express from "express";
import { urlRoute } from "./routes/url.routes";
import { statusRoute } from "./routes/status.routes";
import { database } from "./db/mongo.db";

const api = express();

// Api Configuration
api.use(express.json());

// Routes 
database.connect();
api.use(statusRoute);
api.use(urlRoute);

// Server up
api.listen((process.env.PORT || 5000), () => {
	console.log("Connected!");
});