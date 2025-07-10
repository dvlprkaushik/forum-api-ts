import { getPosts } from "@/controllers/post.controller.js";
import { Router } from "express";

const postRoutes = Router({ mergeParams: true });

postRoutes.route("/posts").get(getPosts);

export { postRoutes };