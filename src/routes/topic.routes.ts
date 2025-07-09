import { createTopicByForumId, getTopicsByForumId } from "@/controllers/topic.controller.js";
import { Router } from "express";


const topicRouter = Router({ mergeParams: true });

topicRouter.route("/topics").get(getTopicsByForumId).post(createTopicByForumId);


export { topicRouter };