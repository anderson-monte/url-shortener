import { Request, Response, Router} from "express";

export const statusRoute = Router();

statusRoute.get("/", (req: Request, res: Response) => {
	res.sendStatus(200);
});