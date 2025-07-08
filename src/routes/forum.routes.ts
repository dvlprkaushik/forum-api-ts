import { getForums } from "@/controllers/topic.controller.js";
import { Router } from "express";


const forumRouter = Router();

forumRouter.route("/v1/forums").get(getForums);

export { forumRouter };