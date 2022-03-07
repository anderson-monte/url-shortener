import { Request, Response } from "express";
import { config } from "../config/constants.config";
import { URLModel } from "../models/url.models";
import shortId from "shortid";

export class URLController {
	public async shorten(req: Request, resp: Response): Promise<void> {
		const { originURL } = req.body;
		const url = await URLModel.findOne({ originURL });
		
		// URL already exists
		if (url) {
			resp.json(url);
			return;
		}

		const hash = shortId.generate();
		const shortURL = `${config.API_URL}:${config.API_PORT}/${hash}`;
		const newURL = await URLModel.create({ hash, shortURL, originURL });
		resp.status(201).json(newURL);
	}

	public async redirect(req: Request, resp: Response): Promise<void> {
		const { hash } = req.params;
		const url = await URLModel.findOne({ hash });

		if (url) {
			resp.redirect(url.originURL);
			return;
		}

		resp.status(400).json({ error: "URL not found" });
	}
}
