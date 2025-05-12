/**
 * @swagger
 * components:
 *   schemas:
 *     LoginDto:
 *       type: object
 *       required:
 *         - userName
 *         - password
 *       properties:
 *         userName:
 *           type: string
 *         password:
 *           type: string
 */

export interface LoginDto {
  userName: string;
  password: string;
}
