import { TOPICS } from "@/data/topicData.js";
import type { ForumTopicParam } from "@/types/Data.types.js";
import { MSG, StCode } from "@/types/HttpUtils.types.js";
import { asyncHandler } from "@/utils/AsyncHandler.js";
import { Responder } from "@/utils/Response.js";
import type { RequestHandler } from "express";

export const getTopicsByForumId: RequestHandler<ForumTopicParam> = asyncHandler(async (req, res) => {
    const { success , failed } = Responder(res);

    const { fid } = req.params;
    const forumTopics = TOPICS.filter(t => t.forumId === fid);

    if (forumTopics.length === 0) {
        return failed(MSG.NOT_FOUND, StCode.NOT_FOUND);
    }
    success(forumTopics, MSG.OK, StCode.OK);
})