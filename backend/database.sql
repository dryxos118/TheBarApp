CREATE DATABASE IF NOT EXISTS thebarapp_db;

USE thebarapp_db;

-- Table: User
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  age INTEGER NOT NULL,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(10) CHECK (role IN ('admin', 'barman', 'client')) NOT NULL,
  last_login TIMESTAMP
);

-- Table: Ingredient
CREATE TABLE ingredients (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  as_alcool BOOLEAN NOT NULL
);

-- Table: Drink
CREATE TABLE drinks (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price DECIMAL(6,2) NOT NULL DEFAULT 0.00,
  as_alcool BOOLEAN NOT NULL,
  is_popular BOOLEAN NOT NULL
);

-- Table: IngredientsQuantity (many-to-many between drinks and ingredients)
CREATE TABLE drink_ingredients (
  drink_id INTEGER REFERENCES drinks(id) ON DELETE CASCADE,
  ingredient_id INTEGER REFERENCES ingredients(id) ON DELETE CASCADE,
  quantity DECIMAL(10,2) NOT NULL,
  unit VARCHAR(50) NOT NULL,
  PRIMARY KEY (drink_id, ingredient_id)
);

-- Table: Orders
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
  status VARCHAR(20) CHECK (status IN ('order', 'inProgress', 'finish')) NOT NULL
);

-- Table: Order Drinks (many-to-many between orders and drinks)
CREATE TABLE order_drinks (
  order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
  drink_id INTEGER REFERENCES drinks(id) ON DELETE CASCADE,
  PRIMARY KEY (order_id, drink_id)
);
