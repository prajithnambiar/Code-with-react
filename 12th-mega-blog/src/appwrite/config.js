import conf from "../conf/conf";
import { Client, Account, ID, Databases, Query } from "appwrite";

export class Service{
    Client = new Client();
    databases;
    bucket;

    constructor(){
        this.Client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.Client);
        this.bucket = new Storage(this.Client);

    }
    async createPost({title, slug, content, featuredImage, status, userId}){
        // eslint-disable-next-line no-useless-catch
        try{
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug, 
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId

                }
            )
    }
    catch(error){
        throw error;
    }
}
async updatePost(slug, {title, content, featuredImage, status}){
    // eslint-disable-next-line no-useless-catch
    try{

        return await this.databases.updateDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
            {
                title,
                content,
                featuredImage,
                status
            }
        )    }
    catch(error){
        throw error;
}
}

async deletePost(slug){
    // eslint-disable-next-line no-useless-catch
    try{
         await this.databases.deleteDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug
        )
        return true;
    }
    catch(error){
        console.log(error);
        return false;
    }
}

async getPost(slug){
    // eslint-disable-next-line no-useless-catch
    try{
        return await this.databases.getDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug
        )
    }
    catch(error){
        console.log(error);
        return false;
    }
}

async getPosts(queries = [Query.equal("status", "active")]){
    // eslint-disable-next-line no-useless-catch
    try{
        return await this.databases.listDocuments(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            queries
        )

    }
    catch(error){
        console.log(error);
        return false;
    }

}
//file upload method will be here

async uploadFile(file){
    // eslint-disable-next-line no-useless-catch
    try{
        return await this.bucket.createFile(
            conf.appwriteBucketId,
            ID.unique(),
            file
        )

    }
    catch(error){
        console.log(error);
        return false;
    }
}

getFilePreview(fileId){
    return this.bucket.getFilePreview(
        conf.appwriteBucketId,
        fileId,
    )
}
}

const service = new Service;
export default service;