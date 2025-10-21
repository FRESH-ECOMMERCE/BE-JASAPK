"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAdmin = void 0;
const http_status_codes_1 = require("http-status-codes");
const sequelize_1 = require("sequelize");
const response_1 = require("../../utilities/response");
const user_1 = require("../../models/user");
const requestCheker_1 = require("../../utilities/requestCheker");
const scure_password_1 = require("../../utilities/scure_password");
const uuid_1 = require("uuid");
const logger_1 = __importDefault(require("../../utilities/logger"));
const createAdmin = async (req, res) => {
    const requestBody = req.body;
    const emptyField = (0, requestCheker_1.requestChecker)({
        requireList: ['userName', 'userWhatsAppNumber', 'userPassword'],
        requestData: requestBody
    });
    if (emptyField.length > 0) {
        const message = `invalid request parameter! require (${emptyField})`;
        logger_1.default.error(message);
        const response = response_1.ResponseData.error(message);
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response);
    }
    try {
        const user = await user_1.UserModel.findOne({
            raw: true,
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                [sequelize_1.Op.or]: [{ userWhatsAppNumber: { [sequelize_1.Op.eq]: requestBody.userWhatsAppNumber } }]
            }
        });
        if (user != null) {
            const message = `Nomor WA ${requestBody.userWhatsAppNumber} sudah terdaftar. Silahkan gunakan yang lain.`;
            const response = response_1.ResponseData.error(message);
            return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response);
        }
        requestBody.userPassword = (0, scure_password_1.hashPassword)(requestBody.userPassword);
        requestBody.userId = (0, uuid_1.v4)();
        await user_1.UserModel.create(requestBody);
        const response = response_1.ResponseData.default;
        response.data = { message: 'success' };
        return res.status(http_status_codes_1.StatusCodes.CREATED).json(response);
    }
    catch (error) {
        const message = `unable to process request! error ${error.message}`;
        logger_1.default.error(message);
        const response = response_1.ResponseData.error(message);
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json(response);
    }
};
exports.createAdmin = createAdmin;
