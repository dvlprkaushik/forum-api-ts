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