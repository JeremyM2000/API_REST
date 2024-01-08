DROP TABLE IF EXISTS club;

CREATE TABLE club
(
    id INT PRIMARY KEY NOT NULL,
    name VARCHAR(50),
    city VARCHAR(50),
    league VARCHAR(50)
);