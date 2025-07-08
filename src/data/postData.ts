import type { DataModels } from "@/types/Data.types.js";
import { TOPICS } from "./topicData.js";

export const POSTS: DataModels.Post[] = [
    // Posts for "Welcome to the forum!" topic
    {
        id: "post-1",
        content: "Hello everyone! Welcome to our community forum. Feel free to introduce yourself and start engaging with other members.",
        topicId: TOPICS[0].id
    },
    {
        id: "post-2",
        content: "Thanks for the warm welcome! I'm excited to be part of this community and looking forward to great discussions.",
        topicId: TOPICS[0].id
    },

    // Posts for "What's your favorite hobby?" topic
    {
        id: "post-3",
        content: "I love reading books, especially science fiction. Currently reading 'The Martian' and it's amazing!",
        topicId: TOPICS[1].id
    },
    {
        id: "post-4",
        content: "Photography is my passion! I enjoy capturing landscapes and street photography. Anyone else into photography?",
        topicId: TOPICS[1].id
    },
    {
        id: "post-5",
        content: "I'm into cooking! Love experimenting with new recipes. Recently tried making homemade pasta and it turned out great.",
        topicId: TOPICS[1].id
    },

    // Posts for "WiFi connection issues" topic
    {
        id: "post-6",
        content: "Having trouble with my WiFi constantly dropping. It happens every few hours. Any troubleshooting tips?",
        topicId: TOPICS[3].id
    },
    {
        id: "post-7",
        content: "Try restarting your router first. If that doesn't work, check if your network drivers are up to date.",
        topicId: TOPICS[3].id
    },
    {
        id: "post-8",
        content: "I had similar issues. Changing the WiFi channel to a less crowded one solved it for me. You can check this in your router settings.",
        topicId: TOPICS[3].id
    },

    // Posts for "TypeScript vs JavaScript" topic
    {
        id: "post-9",
        content: "TypeScript provides better type safety and IDE support. For larger projects, I'd definitely recommend TypeScript.",
        topicId: TOPICS[5].id
    },
    {
        id: "post-10",
        content: "JavaScript is more flexible and has a lower learning curve. For beginners, starting with JavaScript might be easier.",
        topicId: TOPICS[5].id
    },
    {
        id: "post-11",
        content: "I switched from JavaScript to TypeScript last year and haven't looked back. The compile-time error checking is a game changer!",
        topicId: TOPICS[5].id
    },

    // Posts for "Best practices for REST API design" topic
    {
        id: "post-12",
        content: "Always use proper HTTP methods (GET, POST, PUT, DELETE) and return appropriate status codes. Consistency is key!",
        topicId: TOPICS[6].id
    },
    {
        id: "post-13",
        content: "Don't forget about API versioning! Use semantic versioning in your endpoints like /api/v1/users",
        topicId: TOPICS[6].id
    },

    // Posts for "Best indie games of 2024" topic
    {
        id: "post-14",
        content: "Pizza Tower is absolutely fantastic! The animation and gameplay are top-notch. Highly recommend it!",
        topicId: TOPICS[8].id
    },
    {
        id: "post-15",
        content: "Cocoon is a beautiful puzzle game with amazing art style. Perfect for relaxing gaming sessions.",
        topicId: TOPICS[8].id
    },

    // Posts for "Gaming setup recommendations" topic
    {
        id: "post-16",
        content: "Looking to upgrade my gaming setup. What's a good budget-friendly mechanical keyboard you'd recommend?",
        topicId: TOPICS[9].id
    },
    {
        id: "post-17",
        content: "I'm using the Keychron K2 and it's been great! Good build quality and not too expensive.",
        topicId: TOPICS[9].id
    }
  ];