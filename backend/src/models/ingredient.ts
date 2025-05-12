/**
 * @swagger
 * components:
 *   schemas:
 *     Ingredient:
 *       type: object
 *       required:
 *         - id
 *         - name
 *         - asAlcool
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         name:
 *           type: string
 *           example: "Menthe"
 *         asAlcool:
 *           type: boolean
 *           example: false
 */
export interface Ingredient {
  id: number;
  name: string;
  asAlcool: boolean;
}
