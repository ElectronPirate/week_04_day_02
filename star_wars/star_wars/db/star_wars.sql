
DROP TABLE light_sabres;
DROP TABLE characters;

CREATE TABLE characters(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  darkside BOOLEAN,
  age INT NOT NULL
);


-- another table



CREATE TABLE light_sabres(
  id SERIAL PRIMARY KEY,
  colour VARCHAR(255),
  hilt_metal VARCHAR(255),
  owner_id INT REFERENCES characters(id)
  );




-- put data in

INSERT INTO characters (name, darkside, age) VALUES ('Obi-Wan', false, 100);
INSERT INTO characters (name, darkside, age) VALUES ('Anakin Skywalker', false, 29);
INSERT INTO characters (name, darkside, age) VALUES ('Darth Maul', true, 32);
INSERT INTO characters (name, darkside, age) VALUES ('Yoda', false, 500);
INSERT INTO characters (name, darkside, age) VALUES ('Stormtrooper', true, 27);
INSERT INTO characters (name, darkside, age) VALUES ('Stormtrooper', true, 27);
INSERT INTO characters (name, darkside, age) VALUES ('Stormtrooper', true, 27);
INSERT INTO characters (name, darkside, age) VALUES ('Stormtrooper', true, 27);
INSERT INTO characters (name, darkside, age) VALUES ('Stormtrooper', true, 27);


INSERT INTO light_sabres (colour, hilt_metal, owner_id) VALUES ('Red', 'Gold', 1);
INSERT INTO light_sabres (colour, hilt_metal, owner_id) VALUES ('Blue', 'Silver', 1);
