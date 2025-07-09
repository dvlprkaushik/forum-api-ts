import { createTopicByForumId, getTopicById, getTopicsByForumId } from "@/controllers/topic.controller.js";
import { Router } from "express";


const topicRouter = Router({ mergeParams: true });

topicRouter.route("/topics").get(getTopicsByForumId).post(createTopicByForumId);
topicRouter.route("/topics/:tid").get(getTopicById);


export { topicRouter };