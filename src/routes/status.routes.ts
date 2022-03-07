import { Request, Response, Router} from "express";

export const statusRoute = Router();

statusRoute.get("/status", (req: Request, res: Response) => {
	res.sendStatus(200);
});