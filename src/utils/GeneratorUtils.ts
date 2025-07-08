import { FORUMS } from "@/data/forumData.js";
import { POSTS } from "@/data/postData.js";
import { TOPICS } from "@/data/topicData.js";

export const cp = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export const forumsId = (): string => {
    const last = FORUMS[FORUMS.length - 1];
    const lastIdNum = Number(last?.id.split("-")[1] || 0);
    return `forum-${lastIdNum + 1}`;
};

export const topicId = (): string => {
    const last = TOPICS[TOPICS.length - 1];
    const lastIdNum = Number(last?.id.split("-")[1] || 0);
    return `topic-${lastIdNum + 1}`;
};

export const postId = (): string => {
    const last = POSTS[POSTS.length - 1];
    const lastIdNum = Number(last?.id.split("-")[1] || 0);
    return `post-${lastIdNum + 1}`;
};
  