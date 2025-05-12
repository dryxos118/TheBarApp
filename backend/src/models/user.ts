/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - id
 *         - username
 *         - firstName
 *         - lastName
 *         - password
 *         - role
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         username:
 *           type: string
 *           example: "johndoe"
 *         firstName:
 *           type: string
 *           example: "John"
 *         lastName:
 *           type: string
 *           example: "Doe"
 *         age:
 *           type: integer
 *           example: 18
 *         password:
 *           type: string
 *           example: "securePassword123"
 *         role:
 *           type: string
 *           enum: [admin, barman, client]
 *           example: "client"
 *         lastLogin:
 *           type: string
 *           format: date-time
 *           example: "2025-05-12T09:30:00Z"
 */
export type UserRole = "admin" | "barman" | "client";

export interface User {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  age: number;
  password: string;
  role: UserRole;
  lastLogin?: Date;
}
