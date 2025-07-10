import { FORUMS } from "@/data/forumData.js";
import { POSTS } from "@/data/postData.js";
import { TOPICS } from "@/data/topicData.js";
import type { PostBody, PostResponse, TopicPostParam } from "@/types/Data.types.js";
import { MSG, StCode } from "@/types/HttpUtils.types.js";
import { asyncHandler } from "@/utils/AsyncHandler.js";
import { Responder } from "@/utils/Response.js";
import type { RequestHandler } from "express";

export const getPosts: RequestHandler<TopicPostParam> = asyncHandler(
  async (req, res) => {
    const { success, failed } = Responder(res);
    const { fid, tid } = req.params;
    const fIndex = FORUMS.findIndex((f) => f.id === fid);
    const tIndex = TOPICS.findIndex((t) => t.id === tid);
    if (fIndex === -1 || tIndex === -1) {
      return failed(MSG.NOT_FOUND, StCode.NOT_FOUND);
    }
    const postContents: PostResponse[] = [];
    for (const p of POSTS) {
      if (p.topicId === tid) {
        postContents.push({ content: p.content });
      }
    }
    success(postContents, MSG.OK, StCode.OK);
  }
);

