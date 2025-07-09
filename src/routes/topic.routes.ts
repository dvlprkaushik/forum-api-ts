import { createTopicByForumId, getTopicById, getTopicsByForumId, updateTopicById } from "@/controllers/topic.controller.js";
import { Router } from "express";


const topicRouter = Router({ mergeParams: true });

topicRouter.route("/topics").get(getTopicsByForumId).post(createTopicByForumId);
topicRouter.route("/topics/:tid").get(getTopicById).put(updateTopicById);


export { topicRouter };