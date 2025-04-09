import { Client, Databases, ID, Storage, Query } from "appwrite";
import config from "../src/config/config";

export class BlogPostServices {
    client = new Client();
    database;
    bucket;

    constructor() {
        this.client.setEndpoint(config.appURL).setProject(config.appKey);
        this.database = new Databases(this.client);
        this.bucket = new Storage(this.client);

    }

    async createPost({ title, slug, discrption, coverImage, status, useId }) {
        try {
            return await this.database.createDocument(
                config.databaseID,
                config.collectionID,
                slug,
                { title, discrption, coverImage, status, useId },
            );
        } catch (error) {
            console.error("Error creating post:", error);
            throw error;
        }
    }

    async updatePost(slug, { title, discrption, coverImage, status }) {
        try {
            const response = await this.database.updateDocument(
                config.databaseID,
                config.collectionID,
                slug,
                { title, discrption, coverImage, status },
            );
            return response;
        } catch (error) {
            console.error("Error updating post:", error);
            throw error;
        }
    }

    async deletePost(slug) {
        try {
            await this.database.deleteDocument(
                config.databaseID,
                config.collectionID,
                slug,
            );
            return true;
        } catch (error) {
            console.error("Error deleting post:", error);
            return false;
        }
    }

    async getPost(slug) {
        try {
            const response = await this.database.getDocument(
                config.databaseID,
                config.collectionID,
                slug,
            );
            return response;
        } catch (error) {
            console.error("Error fetching post:", error);
            throw error;
        }
    }

    async getAllPosts() {
        try {
            const response = await this.database.listDocuments(
                config.databaseID,
                config.collectionID,
                [Query.equal("status", "active")
                ]
            );
            return response;
        } catch (error) {
            console.error("Error fetching posts:", error);
            throw error;
        }
    }

    // File Upload Services

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                config.ImageBucketID,
                ID.unique(),
                file
            );
        } catch (error) {
            console.error("Error uploading file:", error);
            return false;
        }
    }
    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                config.ImageBucketID,
                fileId);
            return true;
        } catch (error) {
            console.error("Error deleting file:", error);
            return false;
        }
    }

    filePreview(fileId) {
            return this.bucket.getFileView(
                config.ImageBucketID,
                fileId,
            )
    }
}
const blogPostService = new BlogPostServices();

export default blogPostService
