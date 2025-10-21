/**
 * @swagger
 * /api/v1/users/login:
 *   post:
 *     summary: Login
 *     tags: [users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userWhatsAppNumber
 *               - userPassword
 *             properties:
 *               userEmail:
 *                 type: string
 *               userPassword:
 *                 type: string
 *                 minLength: 6
 *     responses:
 *       201:
 *         description: Login successfully
 *       400:
 *         description: Validation error
 */

/**
 * @swagger
 * /api/v1/users/register:
 *   post:
 *     summary: Register a new user
 *     tags: [users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userName
 *               - userPassword
 *               - userWhatsAppNumber
 *               - userGender
 *             properties:
 *               userName:
 *                 type: string
 *               userPassword:
 *                 type: string
 *                 minLength: 6
 *               userWhatsAppNumber:
 *                 type: string
 *               userGender:
 *                 type: string
 *                 enum: [pria, wanita]
 *               userPhoto:
 *                 type: string
 *                 format: uri
 *               userRole:
 *                 type: string
 *                 enum: [user, admin, superAdmin]
 *               userFcmId:
 *                 type: string
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Validation error or duplicate user
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/v1/users:
 *   get:
 *     summary: Get all users
 *     tags: [users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 0
 *         description: Page number
 *       - in: query
 *         name: size
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Page size
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Search by name, email, or partner code
 *       - in: query
 *         name: pagination
 *         schema:
 *           type: string
 *           enum: [true, false]
 *         description: Enable pagination
 *     responses:
 *       200:
 *         description: List of users
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/v1/users/detail:
 *   get:
 *     summary: Get user detail by userId
 *     tags: [users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: Unique ID of the user
 *     responses:
 *       200:
 *         description: User found
 *       400:
 *         description: Missing or invalid userId
 *       403:
 *         description: User not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/v1/users:
 *   delete:
 *     summary: Soft delete a user
 *     tags: [users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID to delete
 *     responses:
 *       200:
 *         description: User successfully marked as deleted
 *       400:
 *         description: Missing userId parameter
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/v1/users:
 *   patch:
 *     summary: Update user data
 *     tags: [users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userName:
 *                 type: string
 *               userEmail:
 *                 type: string
 *                 format: email
 *               userPassword:
 *                 type: string
 *               userWhatsAppNumber:
 *                 type: string
 *               userPhoto:
 *                 type: string
 *                 format: uri
 *               userRole:
 *                 type: string
 *                 enum: [user, admin, superAdmin]
 *               userGender:
 *                 type: string
 *                 enum: [pria, wanita]
 *               userCoin:
 *                 type: number
 *               userFcmId:
 *                 type: string
 *               userPartnerCode:
 *                 type: string
 *     responses:
 *       200:
 *         description: User updated successfully
 *       400:
 *         description: Validation error
 */

/**
 * @swagger
 * /api/v1/users/update-password:
 *   patch:
 *     summary: Update user password
 *     tags: [users]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userPassword
 *             properties:
 *               userPassword:
 *                 type: string
 *                 minLength: 6
 *     responses:
 *       200:
 *         description: Password updated successfully
 *       400:
 *         description: Validation error
 */

/**
 * @swagger
 * /api/v1/users/otp/request:
 *   post:
 *     summary: Request OTP for registration or password reset
 *     tags: [users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - whatsappNumber
 *               - otpType
 *             properties:
 *               whatsappNumber:
 *                 type: string
 *                 example: "628123456789"
 *                 description: WhatsApp number with country code
 *               otpType:
 *                 type: string
 *                 enum: [register, forgotPassword]
 *                 example: register
 *     responses:
 *       200:
 *         description: OTP sent successfully
 *       400:
 *         description: Validation error
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/v1/users/otp/verify:
 *   post:
 *     summary: Verify the OTP code
 *     tags: [users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - whatsappNumber
 *               - otpCode
 *             properties:
 *               whatsappNumber:
 *                 type: string
 *                 example: "628123456789"
 *                 description: WhatsApp number used to request OTP
 *               otpCode:
 *                 type: string
 *                 example: "123456"
 *                 description: OTP code sent to the user
 *     responses:
 *       200:
 *         description: OTP verified successfully
 *       400:
 *         description: Invalid OTP or WhatsApp number
 *       500:
 *         description: Server error
 */
