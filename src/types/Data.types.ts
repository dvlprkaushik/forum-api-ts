export namespace DataModels{
    export interface Forum{
        id: string;
        title: string;
        description? :string
    }
    export interface Topic{
        id: string;
        title: string;
        forumId: string; // foreign key
    }
    export interface Post{
        id: string;
        content: string;
        topicId: string; // foreign key
    }
}

// * FORUM
export type ForumBody = Pick<DataModels.Forum, "title" | "description">;
export interface NewForum extends DataModels.Forum { };
export interface UpdateForum extends DataModels.Forum { };
export type ForumParam = { fid: string };

// * TOPIC 
export interface ForumTopicParam extends ForumParam { }; 
export type TopicBody = Pick<DataModels.Topic, "title">;
export interface NewTopic extends DataModels.Topic { };  
export type TopicParam = { tid: string } & ForumParam;
export interface UpdateTopic extends DataModels.Topic { };

// * POST
export interface TopicPostParam extends TopicParam { };
export type PostParam = TopicParam & { pid: string };
export type PostBody = Pick<DataModels.Post,"content">;
export interface NewPost extends DataModels.Post { };
export type PostResponse = Pick<DataModels.Post, "content">;