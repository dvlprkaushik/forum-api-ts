import { createForum, getForums } from "@/controllers/topic.controller.js";
import { Router } from "express";


const forumRouter = Router();

forumRouter.route("/v1/forums").get(getForums).post(createForum);

export { forumRouter };