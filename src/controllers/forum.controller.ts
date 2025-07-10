import { FORUMS } from "@/data/forumData.js";
import type { ForumBody, ForumParam, NewForum, UpdateForum } from "@/types/Data.types.js";
import { MSG, StCode } from "@/types/HttpUtils.types.js";
import { asyncHandler } from "@/utils/AsyncHandler.js";
import { forumsId } from "@/utils/GeneratorUtils.js";
import { Responder } from "@/utils/Response.js";
import type { RequestHandler } from "express";

export const getForums = asyncHandler(async (_req, res) => {
    const { success, failed } = Responder(res);
    if (FORUMS.length === 0) {
        return failed(MSG.NOT_FOUND, StCode.NOT_FOUND);
    }
    success(FORUMS, MSG.OK, StCode.OK);
})

export const createForum: RequestHandler<{}, {}, ForumBody> = asyncHandler(async (req, res) => {
    const { success, failed } = Responder(res);

    const { title, description } = req.body;
    if (!title) {
        return failed(MSG.BAD_REQUEST, StCode.BAD_REQUEST);
    }

    const newForum: NewForum = {
        id: forumsId(),
        title,
        description: description || undefined
    }
    FORUMS.push(newForum);
    success(newForum, MSG.CREATED, StCode.CREATED);
})

export const getForumById: RequestHandler<ForumParam> = asyncHandler(async (req, res) => {
    const { success, failed } = Responder(res);

    const { fid } = req.params;
    const forum = FORUMS.find(f => f.id === fid); // Changed from filter to find

    if (!forum) {
        return failed(MSG.NOT_FOUND, StCode.NOT_FOUND);
    }

    success(forum, MSG.OK, StCode.OK); // Now returns single object instead of array
})

export const updateForum: RequestHandler<ForumParam, {}, ForumBody> = asyncHandler(async (req, res) => {
    const { success, failed } = Responder(res);

    const { fid } = req.params;
    const { title, description } = req.body;

    if (!title) {
        return failed(MSG.BAD_REQUEST, StCode.BAD_REQUEST);
    }
    const forumIndex = FORUMS.findIndex(f => f.id === fid);
    if (forumIndex === -1) {
        return failed(MSG.NOT_FOUND, StCode.NOT_FOUND);
    }
    const updatedForum: UpdateForum = {
        id: fid,
        title: title,
        description: description || undefined
    }
    FORUMS[forumIndex] = updatedForum;
    success(updatedForum, MSG.OK, StCode.OK);
})

export const deleteForum: RequestHandler<ForumParam> = asyncHandler(async (req, res) => {
    const { success, failed } = Responder(res);

    const { fid } = req.params;
    const forumIndex = FORUMS.findIndex(f => f.id === fid);
    if (forumIndex === -1) {
        return failed(MSG.NOT_FOUND, StCode.NOT_FOUND);
    }

    const deletedForum = FORUMS[forumIndex]; // Store before deleting
    FORUMS.splice(forumIndex, 1);
    success(deletedForum, MSG.OK, StCode.OK); // Return stored forum
})