DROP DATABASE IF EXISTS library;

CREATE DATABASE library;

USE library;

-- Create the role table
CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    role VARCHAR(200) NOT NULL,
    PRIMARY KEY (id)
);

-- Create the adherent table
CREATE TABLE user (
    id INT NOT NULL AUTO_INCREMENT,
    firstname VARCHAR(200) NOT NULL,
    lastname VARCHAR(200) NOT NULL,
    address VARCHAR(200) NOT NULL,
    phone INT NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role_id INT NOT NULL DEFAULT 3,
    PRIMARY KEY (id),
    FOREIGN KEY (role_id) REFERENCES role (id) ON DELETE CASCADE
);

-- Create the category table
CREATE TABLE category (
    id INT NOT NULL AUTO_INCREMENT,
    type VARCHAR(100) NOT NULL,
    level VARCHAR(100) NOT NULL,
    language VARCHAR(100) NOT NULL,
    address VARCHAR(200),
    PRIMARY KEY (id)
);

-- Create the ouvrage table
CREATE TABLE ouvrage (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    author VARCHAR(100) NOT NULL,
    imageURL VARCHAR(255) NOT NULL,
    publication_date DATE,
    category_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (category_id) REFERENCES category (id) ON DELETE CASCADE
);

-- Create the reservation table
CREATE TABLE reservation (
    id INT NOT NULL AUTO_INCREMENT,
    reservation_date DATETIME,
    user_id INT,
    ouvrage_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE,
    FOREIGN KEY (ouvrage_id) REFERENCES ouvrage (id) ON DELETE CASCADE
);

-- Create the lending table
CREATE TABLE lending (
    id INT NOT NULL AUTO_INCREMENT,
    lending_date DATETIME,
    return_date DATETIME,
    user_id INT,
    ouvrage_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE,
    FOREIGN KEY (ouvrage_id) REFERENCES ouvrage (id) ON DELETE CASCADE
);
