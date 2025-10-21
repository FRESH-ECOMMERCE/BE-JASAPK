"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findDetailUser = exports.findAllUser = void 0;
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("../../utilities/response");
const sequelize_1 = require("sequelize");
const requestCheker_1 = require("../../utilities/requestCheker");
const user_1 = require("../../models/user");
const pagination_1 = require("../../utilities/pagination");
const logger_1 = __importDefault(require("../../utilities/logger"));
const findAllUser = async (req, res) => {
    try {
        const page = new pagination_1.Pagination(parseInt(req.query.page) ?? 0, parseInt(req.query.size) ?? 10);
        const users = await user_1.UserModel.findAndCountAll({
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                userRole: { [sequelize_1.Op.eq]: 'user' },
                ...(Boolean(req.query.search) && {
                    [sequelize_1.Op.or]: [
                        { userName: { [sequelize_1.Op.like]: `%${req.query.search}%` } },
                        { userEmail: { [sequelize_1.Op.like]: `%${req.query.search}%` } },
                        { userPartnerCode: { [sequelize_1.Op.like]: `%${req.query.search}%` } }
                    ]
                })
            },
            attributes: [
                'id',
                'userId',
                'userName',
                'userWhatsAppNumber',
                'userCoin',
                'userRole',
                'userPartnerCode',
                'createdAt',
                'updatedAt'
            ],
            order: [['id', 'desc']],
            ...(req.query.pagination === 'true' && {
                limit: page.limit,
                offset: page.offset
            })
        });
        const response = response_1.ResponseData.default;
        response.data = page.data(users);
        logger_1.default.info('Fetched all user successfully');
        return res.status(http_status_codes_1.StatusCodes.OK).json(response);
    }
    catch (error) {
        const message = `Unable to process request! Error: ${error.message}`;
        logger_1.default.error(message, { stack: error.stack });
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json(response_1.ResponseData.error(message));
    }
};
exports.findAllUser = findAllUser;
const findDetailUser = async (req, res) => {
    const requestParams = req.params;
    const emptyField = (0, requestCheker_1.requestChecker)({
        requireList: ['userId'],
        requestData: requestParams
    });
    if (emptyField.length > 0) {
        const message = `invalid request parameter! require (${emptyField})`;
        const response = response_1.ResponseData.error(message);
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response);
    }
    try {
        const user = await user_1.UserModel.findOne({
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                userRole: { [sequelize_1.Op.eq]: 'user' },
                userId: { [sequelize_1.Op.eq]: requestParams.userId }
            },
            attributes: [
                'id',
                'userId',
                'userName',
                'userEmail',
                'userWhatsAppNumber',
                'userCoin',
                'userRole',
                'userPartnerCode',
                'createdAt',
                'updatedAt'
            ]
        });
        if (user == null) {
            const message = 'user not found!';
            const response = response_1.ResponseData.error(message);
            return res.status(http_status_codes_1.StatusCodes.FORBIDDEN).json(response);
        }
        const response = response_1.ResponseData.default;
        response.data = user;
        logger_1.default.info('Fetched detail user successfully');
        return res.status(http_status_codes_1.StatusCodes.OK).json(response);
    }
    catch (error) {
        const message = `Unable to process request! Error: ${error.message}`;
        logger_1.default.error(message, { stack: error.stack });
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json(response_1.ResponseData.error(message));
    }
};
exports.findDetailUser = findDetailUser;
