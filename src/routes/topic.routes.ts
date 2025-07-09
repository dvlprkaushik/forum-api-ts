import { Router } from "express";


const topicRouter = Router({ mergeParams: true });

topicRouter.route("/topics");


export { topicRouter };