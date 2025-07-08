import { createForum, getForums } from "@/controllers/forum.controller.js";
import { Router } from "express";


const forumRouter = Router();

forumRouter.route("/v1/forums").get(getForums).post(createForum);

export { forumRouter };