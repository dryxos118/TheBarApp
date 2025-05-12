import {
  deleteUser,
  findUserById,
  getAllUsers,
  updateUser,
} from "../controllers/userControllers";
import express from "express";

const router = express.Router();

/**
 * @swagger
 * /api/v1/users/:
 *   get:
 *     summary: Get all users (secured)
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Users listed
 *       400:
 *         description: Error
 */
router.route("/").get(getAllUsers);

/**
 * @swagger
 * /api/v1/users/{id}:
 *   post:
 *     summary: Find a user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the user
 *     responses:
 *       200:
 *         description: User found successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: User not found
 */
router.route("/:id").post(findUserById);

/**
 * @swagger
 * /api/v1/users/update:
 *   post:
 *     summary: Update an existing user
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: User updated successfully
 *       404:
 *         description: User not found
 */
router.route("/update").post(updateUser);

/**
 * @swagger
 * /api/v1/users/delete/{id}:
 *   delete:
 *     summary: Delete a user by ID
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the user to delete
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       404:
 *         description: User not found
 */
router.route("/delete/:id").delete(deleteUser);

export default router;
