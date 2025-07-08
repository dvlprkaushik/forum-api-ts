import { FORUMS } from "@/data/forumData.js";
import { MSG, StCode } from "@/types/HttpUtils.types.js";
import { asyncHandler } from "@/utils/AsyncHandler.js";
import { Responder } from "@/utils/Response.js";

export const getForums = asyncHandler(async (req, res) => {
    const { success, failed} = Responder(res);
    if (FORUMS.length === 0) {
        return failed(MSG.NOT_FOUND, StCode.NOT_FOUND);
    }
    success(FORUMS,MSG.OK, StCode.OK);
})