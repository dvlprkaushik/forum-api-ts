import { createTopicByForumId, deleteTopic, getTopicById, getTopicsByForumId, updateTopicById } from "@/controllers/topic.controller.js";
import { Router } from "express";
import { postRoutes } from "./post.routes.js";

const topicRouter = Router({ mergeParams: true });

topicRouter.route("/topics").get(getTopicsByForumId).post(createTopicByForumId);
topicRouter.route("/topics/:tid").get(getTopicById).put(updateTopicById).delete(deleteTopic);

// posts route
topicRouter.use("/topics/:tid", postRoutes);

export { topicRouter };