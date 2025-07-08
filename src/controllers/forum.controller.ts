import { FORUMS } from "@/data/forumData.js";
import type { ForumBody, NewForum } from "@/types/Data.types.js";
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

    const newForum : NewForum = {
        id: forumsId(),
        title,
        description : description ? description : undefined
    }
    FORUMS.push(newForum);
    success(newForum, MSG.CREATED, StCode.CREATED);
})