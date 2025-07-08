import type { DataModels } from "@/types/Data.types.js";
import { FORUMS } from "./forumData.js";

export const TOPICS: DataModels.Topic[] = [
    // General Discussion topics
    {
        id: "topic-1",
        title: "Welcome to the forum!",
        forumId: FORUMS[0].id
    },
    {
        id: "topic-2",
        title: "What's your favorite hobby?",
        forumId: FORUMS[0].id
    },
    {
        id: "topic-3",
        title: "Weekend plans discussion",
        forumId: FORUMS[0].id
    },

    // Tech Support topics
    {
        id: "topic-4",
        title: "WiFi connection issues",
        forumId: FORUMS[1].id
    },
    {
        id: "topic-5",
        title: "Laptop running slow - help needed",
        forumId: FORUMS[1].id
    },

    // Programming topics
    {
        id: "topic-6",
        title: "TypeScript vs JavaScript - which to choose?",
        forumId: FORUMS[2].id
    },
    {
        id: "topic-7",
        title: "Best practices for REST API design",
        forumId: FORUMS[2].id
    },
    {
        id: "topic-8",
        title: "React vs Vue - beginner friendly?",
        forumId: FORUMS[2].id
    },

    // Gaming topics
    {
        id: "topic-9",
        title: "Best indie games of 2024",
        forumId: FORUMS[3].id
    },
    {
        id: "topic-10",
        title: "Gaming setup recommendations",
        forumId: FORUMS[3].id
    }
  ];