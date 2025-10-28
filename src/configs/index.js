"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appConfigs = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.appConfigs = {
    app: {
        appVersion: process.env.APP_VERSION ?? '',
        appMode: process.env.APP_MODE ?? 'development',
        env: process.env.APP_ENV,
        port: process.env.APP_PORT ?? 8000,
        log: process.env.APP_LOG === 'true'
    },
    secret: {
        keyEncryption: process.env.SECRET_KEY_ENCRYPTION,
        passwordEncryption: process.env.SECRET_PASSWORD_ENCRYPTION,
        pinEncryption: process.env.SECRET_PIN_ENCRYPTION,
        token: process.env.TOKEN_SECRET
    },
    redis: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT
    },
    wablas: {
        url: process.env.WABLAS_URL,
        apiKey: `${process.env.WABLAS_API_KEY}.${process.env.WABLAS_SECRET_KEY}`
    },
    cors: {
        origin: process.env.CORS_ORIGIN
    },
    dataBase: {
        development: {
            username: process.env.DB_USER_NAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            host: process.env.DB_HOST,
            dialect: process.env.DB_DIALECT,
            logging: process.env.DB_LOG === 'true',
            port: process.env.DB_PORT
        },
        testing: {
            username: process.env.DB_USER_NAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            host: process.env.DB_HOST,
            dialect: process.env.DB_DIALECT,
            logging: process.env.DB_LOG === 'true',
            port: process.env.DB_PORT
        },
        production: {
            username: process.env.DB_USER_NAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            host: process.env.DB_HOST,
            dialect: process.env.DB_DIALECT,
            logging: process.env.DB_LOG === 'true',
            port: process.env.DB_PORT
        }
    }
};
