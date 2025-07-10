import { FORUMS } from "@/data/forumData.js";
import { POSTS } from "@/data/postData.js";
import { TOPICS } from "@/data/topicData.js";
import type {
  NewPost,
  PostBody,
  PostParam,
  PostResponse,
  TopicPostParam,
  UpdatePost,
} from "@/types/Data.types.js";
import { MSG, StCode } from "@/types/HttpUtils.types.js";
import { asyncHandler } from "@/utils/AsyncHandler.js";
import { postId } from "@/utils/GeneratorUtils.js";
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
    success({ content: postContents }, MSG.OK, StCode.OK);
  }
);

export const createPost: RequestHandler<TopicPostParam, {}, PostBody> =
  asyncHandler(async (req, res) => {
    const { success, failed } = Responder(res);
    const { fid, tid } = req.params;

    const { content } = req.body;

    const fIndex = FORUMS.findIndex((f) => f.id === fid);
    const tIndex = TOPICS.findIndex((t) => t.id === tid);
    if (fIndex === -1 || tIndex === -1) {
      return failed(MSG.NOT_FOUND, StCode.NOT_FOUND);
    }

    const newPost: NewPost = {
      id: postId(),
      content: content,
      topicId: tid,
    };

    POSTS[tIndex] = newPost;
    success(newPost, MSG.CREATED, StCode.CREATED);
  });

export const getPost: RequestHandler<PostParam> = asyncHandler(
  async (req, res) => {
    const { success, failed } = Responder(res);
    const { fid, tid, pid } = req.params;
    const fIndex = FORUMS.findIndex((f) => f.id === fid);
    const tIndex = TOPICS.findIndex((t) => t.id === tid);
    const post = POSTS.find((p) => p.id === pid);
    if (fIndex === -1 || tIndex === -1 || !post || post.topicId !== tid) {
      return failed(MSG.NOT_FOUND, StCode.NOT_FOUND);
    }
    success<PostResponse>({ content: post.content }, MSG.OK, StCode.OK);
  }
);

export const updatePost: RequestHandler<PostParam, {}, PostBody> = asyncHandler(
  async (req, res) => {
    const { success, failed } = Responder(res);

    const { fid, tid, pid } = req.params;
    const { content } = req.body;

    const fIndex = FORUMS.findIndex((f) => f.id === fid);
    const tIndex = TOPICS.findIndex((t) => t.id === tid);
    const pIndex = POSTS.findIndex((p) => p.id === pid);

    if (fIndex === -1 || tIndex === -1 || pIndex === -1) {
      return failed(MSG.NOT_FOUND, StCode.NOT_FOUND);
    }

    if (!content) {
      return failed(MSG.BAD_REQUEST, StCode.BAD_REQUEST);
    }

    const updatedPost: UpdatePost = {
      id: pid,
      content: content,
      topicId: tid,
    };

    POSTS[pIndex] = updatedPost;

    success<PostResponse>({ content: updatedPost.content }, MSG.OK, StCode.OK);
  }
);
