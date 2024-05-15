CREATE DATABASE ecommerce_db;

USE ecommerce_db;

CREATE TABLE Category(
    id INT AUTO_INCREMENT NOT NULL,
    category_name VARCHAR(30) NOT NULL,
)

CREATE TABLE Product(
   id INT AUTO_INCREMENT NOT NULL,
   product_name VARCHAR(30) NOT NULL,
--    price DECIMAL NOT NULL IS_DECIMAL TRUE,
    stock INT NOT NULL DEFAULT(10),
            -- validate number is numeric
    category_id INT NOT NULL,
    PRIMARY KEY(id)

)

CREATE TABLE Tag(
    id INT AUTO_INCREMENT NOT NULL,
    tag_name VARCHAR(30),
    PRIMARY KEY (id)
)    

CREATE TABLE ProductTag(
    id INT AUTO_INCREMENT NOT NULL,
    product_id INT (id)
    tag_id INT (id)
    PRIMARY KEY (id)
)

