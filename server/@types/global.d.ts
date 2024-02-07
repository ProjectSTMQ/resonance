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
            username?: String
        }
    }
}

export {}