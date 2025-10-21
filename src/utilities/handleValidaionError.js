"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("../utilities/response");
const logger_1 = __importDefault(require("../utilities/logger"));
const handleValidationError = (res, error) => {
    const message = `Invalid request! ${error.details.map((x) => x.message).join(', ')}`;
    logger_1.default.warn(message);
    return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response_1.ResponseData.error(message));
};
exports.default = handleValidationError;
