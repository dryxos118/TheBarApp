import { IngredientsQuantity } from "./ingredientsQuantity";

/**
 * @swagger
 * components:
 *   schemas:
 *     Drink:
 *       type: object
 *       required:
 *         - id
 *         - name
 *         - price
 *         - ingredients
 *         - asAlcool
 *         - isPopular
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         name:
 *           type: string
 *           example: "Mojito"
 *         price:
 *           type: number
 *           format: float
 *           example: 8.5
 *         asAlcool:
 *           type: boolean
 *           example: true
 *         isPopular:
 *           type: boolean
 *           example: true
 *         ingredients:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/IngredientsQuantity'
 */
export interface Drink {
  id: number;
  name: string;
  price: number;
  ingredients: IngredientsQuantity[];
  asAlcool: boolean;
  isPopular: boolean;
}
