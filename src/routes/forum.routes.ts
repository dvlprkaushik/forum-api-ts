import { createForum, deleteForum, getForumById, getForums, updateForum } from "@/controllers/forum.controller.js";
import { Router } from "express";
import { topicRouter } from "./topic.routes.js";

const forumRouter = Router();

forumRouter.route("/v1/forums").get(getForums).post(createForum);
forumRouter.route("/v1/forums/:fid").get(getForumById).put(updateForum).delete(deleteForum);


// topics route
forumRouter.use("/v1/forums/:fid", topicRouter);

export { forumRouter };