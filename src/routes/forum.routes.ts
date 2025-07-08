import { createForum, getForumById, getForums } from "@/controllers/forum.controller.js";
import { Router } from "express";


const forumRouter = Router();

forumRouter.route("/v1/forums").get(getForums).post(createForum);
forumRouter.route("/v1/forums/:fid").get(getForumById);

export { forumRouter };