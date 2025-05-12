/**
 * @swagger
 * components:
 *   schemas:
 *     RegisterDTO:
 *       type: object
 *       required:
 *         - username
 *         - password
 *         - firstName
 *         - lastName
 *         - age
 *       properties:
 *         userName:
 *           type: string
 *         password:
 *           type: string
 *         firstName:
 *           type: string
 *         lastName:
 *           type: string
 *         age:
 *           type: integer
 */

export interface RegisterDto {
  userName: string;
  firstName: string;
  lastName: string;
  age: number;
  password: string;
}
