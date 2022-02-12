CREATE TABLE users (
    id SERIAL PRIMARY  KEY,
    name VARCHAR(150),
    password VARCHAR(150)
);
INSERT INTO users(name, password) VALUES ('Hannes', 'asjd623lksfgal32')