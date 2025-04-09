import { Client, Account, ID } from "appwrite";
import config from "../src/config/config"; // Path to your config file
// Initialize Appwrite Client

export class Authservice {
    client = new Client();
    account;
    constructor() {
        this.client
        .setEndpoint(config.appURL)
        .setProject(config.appKey);
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}) {
        try {
            const response = await this.account.create(ID.unique(), email, password, name);
            return response;
        } catch (error) {
            console.error("Error creating account:", error);
            throw error;
        }
    }

    async login({email, password}) {
        try {
            const response = await this.account.createEmailPasswordSession(email, password);
            return response;
        } catch (error) {
            console.error("Error logging in:", error);
            throw error;
        }
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.error("Error logging out:", error);
        }
    }

    async getAccount() {
        try {
            const response = await this.account.get();
            return response;
        } catch (error) {
            console.error("Error fetching account:", error);
        }
        return null;
    }
        
}

const authService = new Authservice();
export const auth = authService.account;

export default authService;
