DROP TABLE users;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255)
);



INSERT INTO users (name, email) VALUES ('Sian RD', 'srd@codeclan.com');
INSERT INTO users (name, email) VALUES ('Michael J Fox', 'michaeljf@gmail.com');
