// Declaration file

declare global {
    // For environment variables - https://stackoverflow.com/a/53981706
    namespace NodeJS {
        interface ProcessEnv {
            PORT: number;
            DB_CONNECTION_STRING: string;
            DB_NAME: string;
        }
    }

    // For extending req object with username property in Auth middleware - https://stackoverflow.com/q/37377731
    namespace Express {
        interface Request {
            username?: string
        }
    }

    // Custom interfaces for interacting with MongoDB models
    interface IUser {
        username: string;
        password: string;
    }
    interface ISession {
        sessionId: string;
        username: string;
        lastAccessed: Date;
    }
    interface IConversation {
        conversationId: string;
        participants: string[];
        // type: string;
        createdAt: Date;
    }
    interface IMessage {
        messageId: string;
        conversationId: string;
        sender: string;
        content: string;
        timestamp: Date;
    }
}

export {};