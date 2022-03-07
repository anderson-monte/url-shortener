import "dotenv/config";

export const config = {
	API_URL: process.env.API_URL,
	API_PORT: (process.env.PORT || 5000),
	MONGO_CONNECTION: process.env.MONGO_TOKEN,
};