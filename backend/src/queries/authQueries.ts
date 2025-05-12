export const userExistingQuery: string =
  "SELECT id FROM users WHERE username = ?";

export const userCountQuery: string = "SELECT COUNT(*) AS count FROM users";

export const registerQuery: string =
  "INSERT INTO users (username, password, first_name, last_name, age, role, last_login) VALUES (?, ?, ?, ?, ?, ?, NOW())";

export const loginQuery: string = "SELECT * FROM users WHERE username = ?";

export const updateLastLoginQuery: string =
  "UPDATE users SET last_login = NOW() WHERE id = ?";
