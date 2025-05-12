export const getAllUsersQuery: string = "SELECT * FROM users";

export const findUserByIdQuery: string = "SELECT * FROM users WHERE id = ?";

export const updateUserQuery: string =
  "UPDATE users SET first_name = ?, last_name = ?, age = ?, role = ? WHERE id = ?";

export const deleteUserQuery: string = "DELETE FROM users WHERE id = ?";
