import { Drink } from "./drink";

/**
 * @swagger
 * components:
 *   schemas:
 *     Order:
 *       type: object
 *       required:
 *         - id
 *         - userId
 *         - drinks
 *         - status
 *       properties:
 *         id:
 *           type: integer
 *           example: 10
 *         userId:
 *           type: integer
 *           example: 3
 *         drinks:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Drink'
 *         status:
 *           type: string
 *           enum: [order, inProgress, finish]
 *           example: "order"
 */
export type OrderStatus = "order" | "inProgress" | "finish";

export interface Order {
  id: number;
  userId: number;
  drinks: Drink[];
  status: OrderStatus;
}
