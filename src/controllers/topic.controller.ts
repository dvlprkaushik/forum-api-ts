import { FORUMS } from "@/data/forumData.js"; // Added import for forum validation
import { TOPICS } from "@/data/topicData.js";
import type {
    TopicBody,
    ForumTopicParam,
    NewTopic,
    TopicParam,
    UpdateTopic,
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

        // First validate if forum exists
        const forumExists = FORUMS.some(f => f.id === fid);
        if (!forumExists) {
            return failed("Forum not found", StCode.NOT_FOUND);
        }

        const forumTopics = TOPICS.filter((t) => t.forumId === fid);

        // Now it's okay to return empty array if forum exists but has no topics
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

    // Check if forum exists (not if topic exists)
    const forumExists = FORUMS.some(f => f.id === fid);
    if (!forumExists) {
        return failed("Forum not found", StCode.NOT_FOUND);
    }

    const newTopic: NewTopic = {
        id: topicId(),
        title: title,
        forumId: fid,
    };

    TOPICS.push(newTopic);

    success(newTopic, MSG.CREATED, StCode.CREATED);
});

export const getTopicById: RequestHandler<TopicParam> = asyncHandler(
    async (req, res) => {
        const { success, failed } = Responder(res);

        const { fid, tid } = req.params;

        // First validate if forum exists
        const forumExists = FORUMS.some(f => f.id === fid);
        if (!forumExists) {
            return failed("Forum not found", StCode.NOT_FOUND);
        }

        const topic = TOPICS.find((t) => t.forumId === fid && t.id === tid);
        if (!topic) {
            return failed(MSG.NOT_FOUND, StCode.NOT_FOUND);
        }

        success(topic, MSG.OK, StCode.OK);
    }
);

export const updateTopicById: RequestHandler<TopicParam, {}, TopicBody> =
    asyncHandler(async (req, res) => {
        const { success, failed } = Responder(res);

        const { fid, tid } = req.params;
        const { title } = req.body;

        if (!title) {
            return failed(MSG.BAD_REQUEST, StCode.BAD_REQUEST);
        }

        // First validate if forum exists
        const forumExists = FORUMS.some(f => f.id === fid);
        if (!forumExists) {
            return failed("Forum not found", StCode.NOT_FOUND);
        }

        const index = TOPICS.findIndex((t) => t.forumId === fid && t.id === tid);
        if (index === -1) {
            return failed("Topic not found", StCode.NOT_FOUND);
        }

        const updatedTopic: UpdateTopic = {
            id: tid,
            title: title,
            forumId: fid,
        };

        TOPICS[index] = updatedTopic;

        success(updatedTopic, MSG.OK, StCode.OK);
    });

export const deleteTopic: RequestHandler<TopicParam> = asyncHandler(
    async (req, res) => {
        const { success, failed } = Responder(res);

        const { fid, tid } = req.params;

        // First validate if forum exists
        const forumExists = FORUMS.some(f => f.id === fid);
        if (!forumExists) {
            return failed("Forum not found", StCode.NOT_FOUND);
        }

        const index = TOPICS.findIndex((t) => t.forumId === fid && t.id === tid);
        if (index === -1) {
            return failed("Topic not found", StCode.NOT_FOUND);
        }

        const deletedTopic = TOPICS[index]; // Store before deleting
        TOPICS.splice(index, 1);

        success(deletedTopic, MSG.OK, StCode.OK);
    }
);