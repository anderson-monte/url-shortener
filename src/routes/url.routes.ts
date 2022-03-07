import { Router } from "express";
import { URLController } from "../controllers/url.controllers";

// Object initialization
export const urlRoute = Router();
const urlController = new URLController();

// HTTP REQUESTS
urlRoute.post("/shorten", (urlController.shorten));
urlRoute.get("/:hash", urlController.redirect);

