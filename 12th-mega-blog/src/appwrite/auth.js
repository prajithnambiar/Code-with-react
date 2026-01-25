import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl) // Your Appwrite Endpoint
            .setProject(conf.appwriteProjectId); // Your project ID
        
        // Use API Key if available for server-side operations
        if(conf.appwriteApiKey) {
            this.client.setKey(conf.appwriteApiKey);
        }
        
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}) {
        // eslint-disable-next-line no-useless-catch
        try{
            const userAccount = await this.account.create({
                  userId: ID.unique(),
                email,
                password,
                name

            }
               
            );
            if(userAccount){
                //call login method
                return await this.login({email, password});
            }
            else{
                return userAccount
            }
            

        }
        catch(error){
            throw error;
        }
    }

    async login({email, password}) {
        // eslint-disable-next-line no-useless-catch
        try{
            return await this.account.createEmailPasswordSession({email, password});

        }
        catch(error){
            throw error;
        }
    }

    async getCurrentUser(){
        // eslint-disable-next-line no-useless-catch
        try{
            this.createAccount({email:'prajit@fh.com', password: 'password', name: 'prajith'});
            return await this.account.get();

        }
        catch(error){
            console.log("No current user");
            throw error;
        }
    }

    async logOut(){
        // eslint-disable-next-line no-useless-catch
        try{
            await this.account.deleteSessions
        ();         
        }
        catch(error){
            throw error
        }
    }



};



const authService = new AuthService();
export default authService;