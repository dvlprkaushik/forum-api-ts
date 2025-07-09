import { TOPICS } from "@/data/topicData.js";
import type {
  TopicBody,
  ForumTopicParam,
  NewTopic,
  TopicParam,
} from "@/types/Data.types.js";
import { MSG, StCode } from "@/types/HttpUtils.types.js";
import { asyncHandler } from "@/utils/AsyncHandler.js";
import { topicId } from "@/utils/GeneratorUtils.js";
import { Responder } from "@/utils/Response.js";
import type { RequestHandler } from "express";

export const getTopicsByForumId: RequestHandler<ForumTopicParam> = asyncHandler(
  async (req, res) => {
    const { success, failed } = Responder(res);

    const { fid } = req.params;
    const forumTopics = TOPICS.filter((t) => t.forumId === fid);

    if (forumTopics.length === 0) {
      return failed(MSG.NOT_FOUND, StCode.NOT_FOUND);
    }
    success(forumTopics, MSG.OK, StCode.OK);
  }
);

export const createTopicByForumId: RequestHandler<
  ForumTopicParam,
  {},
  TopicBody
> = asyncHandler(async (req, res) => {
  const { success, failed } = Responder(res);

  const { fid } = req.params;
  const { title } = req.body;

  if (!title) {
    return failed(MSG.BAD_REQUEST, StCode.BAD_REQUEST);
  }
  const index = TOPICS.findIndex((t) => t.forumId === fid);
  if (index === -1) {
    return failed(MSG.NOT_FOUND, StCode.NOT_FOUND);
  }

  const newTopic: NewTopic = {
    id: topicId(),
    title: title,
    forumId: fid,
  };

  TOPICS.push(newTopic);

  success(newTopic, MSG.CREATED, StCode.CREATED);
});

export const getTopicById: RequestHandler<TopicParam> = asyncHandler(async (req, res) => {
    const { success, failed } = Responder(res);
    
    const { fid, tid } = req.params;
    const index = TOPICS.findIndex((t) => t.forumId === fid && t.id === tid);
    if (index === -1) {
        return failed(MSG.NOT_FOUND, StCode.NOT_FOUND);
    }
    success(TOPICS[index], MSG.OK, StCode.OK);
})
