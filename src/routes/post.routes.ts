import { createPost, getPost, getPosts } from "@/controllers/post.controller.js";
import { Router } from "express";

const postRoutes = Router({ mergeParams: true });

postRoutes.route("/posts").get(getPosts).post(createPost);
postRoutes.route("/posts/:pid").get(getPost);

export { postRoutes };