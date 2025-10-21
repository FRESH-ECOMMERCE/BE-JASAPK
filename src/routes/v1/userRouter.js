"use strict";
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = require("../../controllers/users");
const middlewares_1 = require("../../middlewares");
const router = (0, express_1.Router)();
router.get('/', middlewares_1.middleware.useAuthorization, async (req, res) => await users_1.UsersController.findAll(req, res));
router.get('/detail/:userId', middlewares_1.middleware.useAuthorization, async (req, res) => await users_1.UsersController.findDetailUser(req, res));
router.post('/login', async (req, res) => await users_1.UsersController.login(req, res));
router.post('/register', async (req, res) => await users_1.UsersController.register(req, res));
router.patch('/', middlewares_1.middleware.useAuthorization, async (req, res) => await users_1.UsersController.update(req, res));
router.delete('/', middlewares_1.middleware.useAuthorization, async (req, res) => await users_1.UsersController.remove(req, res));
router.patch('/update-coin', middlewares_1.middleware.useAuthorization, async (req, res) => await users_1.UsersController.updateUserCoin(req, res));
router.patch('/update-password', async (req, res) => await users_1.UsersController.updatePassword(req, res));
router.post('/otp/request', async (req, res) => await users_1.UsersController.requestOtp(req, res));
router.post('/otp/verify', async (req, res) => await users_1.UsersController.verifyOtp(req, res));
exports.default = router;
