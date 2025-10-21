"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-misused-promises */
const express_1 = require("express");
const controllers_1 = require("../../controllers");
const router = (0, express_1.Router)();
router.get('/', async (req, res) => await (0, controllers_1.mainController)(req, res));
router.get('/health', async (req, res) => await (0, controllers_1.healthCheckController)(req, res));
exports.default = router;
