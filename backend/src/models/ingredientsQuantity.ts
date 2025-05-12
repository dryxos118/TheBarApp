import { Ingredient } from "./ingredient";

/**
 * @swagger
 * components:
 *   schemas:
 *     IngredientsQuantity:
 *       type: object
 *       required:
 *         - id
 *         - name
 *         - quantity
 *         - unit
 *         - asAlcool
 *       properties:
 *         id:
 *           type: integer
 *           example: 2
 *         name:
 *           type: string
 *           example: "Citron"
 *         quantity:
 *           type: number
 *           format: float
 *           example: 3.0
 *         unit:
 *           type: string
 *           example: "cl"
 *         asAlcool:
 *           type: boolean
 *           example: false
 */
export interface IngredientsQuantity extends Ingredient {
  quantity: number;
  unit: string;
}
