-- DROP DATABASE IF EXISTS ecommerce_db;


-- CREATE DATABASE ecommerce_db;

-- USE ecommerce_db;

-- CREATE TABLE Category(
--     id INT AUTO_INCREMENT NOT NULL,
--     category_name VARCHAR(30) NOT NULL,
--     PRIMARY KEY (id)
-- );

-- CREATE TABLE Product(
--    id INT AUTO_INCREMENT NOT NULL,
--    product_name VARCHAR(30) NOT NULL,
--    price DECIMAL(10,2) NOT NULL, CHECK (price = ROUND(price,2)),
--        stock INT NOT NULL DEFAULT(10) CHECK (stock >= 0),
--         category_id INT NOT NULL,
--     PRIMARY KEY(id),
--     FOREIGN KEY (category_id) REFERENCES Category(id)

-- );

-- CREATE TABLE Tag(
--     id INT AUTO_INCREMENT NOT NULL,
--     tag_name VARCHAR(30),
--     PRIMARY KEY (id)
-- ) ;   

-- CREATE TABLE ProductTag(
--     id INT AUTO_INCREMENT NOT NULL,
--     product_id INT,
--     tag_id INT,
--     PRIMARY KEY (id),
--     FOREIGN KEY (product_id) REFERENCES Product(id),
--  FOREIGN KEY (tag_id) REFERENCES Tag(id)
-- );


