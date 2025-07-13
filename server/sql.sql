
CREATE TABLE IF NOT EXISTS genres (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR (255) NOT NULL
)

SELECT * FROM genres


INSERT INTO genres(name) VALUES('Jazz');
INSERT INTO genres(name) VALUES('Rock');
INSERT INTO genres(name) VALUES('Rap');
INSERT INTO genres(name) VALUES('World Music');
INSERT INTO genres(name) VALUES('Reggae');
INSERT INTO genres(name) VALUES('Classical');
INSERT INTO genres(name) VALUES('Pop');




CREATE TABLE IF NOT EXISTS albums (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title VARCHAR (255) NOT NULL,
  artist TEXT NOT NULL,
  year INTEGER, 
  cover TEXT,
  genre_id INTEGER REFERENCES genres(id)
)


INSERT INTO albums (title, artist, year, cover, genre_id) VALUES 
('A Love Supreme', 'John Coltrane', '1965', 'https://m.media-amazon.com/images/I/81P2z6qkpqL._UF1000,1000_QL80_.jpg', 1),
('Myfavourite things', 'John Coltrane','1961', 'https://www.mcru.co.uk/wp-content/uploads/2024/01/John-Coltrane-My-Favorite-Things.jpg', 1),
('Kind Of Blue', 'Miles Davis', '1959', 'https://m.media-amazon.com/images/I/71UUU3OLX2L._UF1000,1000_QL80_.jpg', 1),
('Rubber Soul', 'The Beatles', '1965', 'https://spaceharrogate.co.uk/image/cache/catalog/beatles%20rubber%20soul-1000x1000.jpg', 2),
('A Kind Of Magic', 'Queen', '1986', 'https://m.media-amazon.com/images/I/61NHCD7WPiL.jpg', 2),
('Queen II', 'Queen', '1974', 'https://m.media-amazon.com/images/I/61u2KkzeInL._UF1000,1000_QL80_.jpg', 2),
('Prose Combat', 'MC Solaar', '1994', 'https://assai.co.uk/cdn/shop/products/68b58059-750f-46b0-8169-f00d555d6712.jpg?v=1649944744', 3),
('Chants Of Inida', 'Ravi Shankar', '1997', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKSXo2jnSgmFe4OuhqSz4NuKlkOsTy6rHfwA&s', 4),
('New Ancient Strings', 'Ballaké Sissoko &  Toumani Diabaté', '1999', 'https://d1rgjmn2wmqeif.cloudfront.net/r/b/430088.png', 4),
('22 Strings', 'Seckou Keita', '2015', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdsYhUcRee89jgoYqGBReUpe5CH4X81Odu1w&s', 4),
('Until The End Of Time', 'Tupac Shakur', '2001', 'https://media.discopiu.com/img/2021/7/27/798205-large-2pac-until-the-end-of-time-br-small-umc-small.webp', 3),
('Passages', 'Ravi Shankar & Philip Glass', '1990', 'https://m.media-amazon.com/images/I/517RiqVQ3gL._UF1000,1000_QL80_.jpg', 4),
( 'Vision', 'Alpha Blondy', '2011', 'https://m.media-amazon.com/images/I/815h-SV1aAL._UF1000,1000_QL80_.jpg', 5),
('Kaya', 'Bob Marley & The Wailers', '1978', 'https://m.media-amazon.com/images/I/814ZJTkOKML._UF1000,1000_QL80_.jpg', 5),
('Gang Signs & Prayer', 'Stormzy', '2017', 'https://images.genius.com/7bb6e11ec2fa4e8ce6293eb27c37e2b9.1000x1000x1.jpg', 3),
('Glassworks', 'Philp Glass', '1982', 'https://images.genius.com/7f241eabdb7ed0db3fbb0d354fc95238.1000x1000x1.jpg', 6),
('Glass: Saxophone', 'Philp Glass', '2002', 'https://m.media-amazon.com/images/I/61zBqeI4TJL._UF1000,1000_QL80_.jpg', 6),
('The Piano', 'Michael Nyman', '1993', 'https://m.media-amazon.com/images/I/41QfBALgvxL._UF1000,1000_QL80_.jpg', 6),
('Fearless', 'Taylor Swift', '2008', 'https://m.media-amazon.com/images/I/81zOoQVDJjL._UF1000,1000_QL80_.jpg', 7),
('1989', 'Taylor Swift', '2014', 'https://m.media-amazon.com/images/I/616Xa+hzMXL._UF1000,1000_QL80_.jpg', 7),
('Parachutes', 'Coldplay', '2000', 'https://m.media-amazon.com/images/I/61gf1Xh8iML._UF1000,1000_QL80_.jpg', 7),
('Empire Central','Snarky Puppy', '2022', 'https://m.media-amazon.com/images/I/81P2c1+Ll3L._AC_UF1000,1000_QL80_.jpg', 7),
( 'Night Nurse', 'Gregory Isaacs', '1982', 'https://m.media-amazon.com/images/I/51fdeF7AGlL._UF1000,1000_QL80_.jpg', 5)

SELECT * FROM albums ORDER BY title asc
SELECT * FROM albums ORDER BY artist
SELECT * FROM albums 

CREATE TABLE IF NOT EXISTS eras (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL
)

INSERT INTO eras (name) VALUES ('fifties');
INSERT INTO eras (name) VALUES ('sixties');
INSERT INTO eras (name) VALUES ('seventies');
INSERT INTO eras (name) VALUES ('heighties');
INSERT INTO eras (name) VALUES ('nineties');
INSERT INTO eras (name) VALUES ('noughties');
INSERT INTO eras (name) VALUES ('two thousand tens');

SELECT * FROM eras

CREATE TABLE IF NOT EXISTS albums_eras (
  album_id INTEGER REFERENCES albums(id),
  era_id INTEGER REFERENCES eras(id),
  PRIMARY KEY (album_id, era_id)
)

INSERT INTO albums_eras(album_id, era_id) VALUES(1, 2);
INSERT INTO albums_eras(album_id, era_id) VALUES(2, 2);
INSERT INTO albums_eras(album_id, era_id) VALUES(3, 1);
INSERT INTO albums_eras(album_id, era_id) VALUES(4, 2);
INSERT INTO albums_eras(album_id, era_id) VALUES(5, 4);
INSERT INTO albums_eras(album_id, era_id) VALUES(6, 3);
INSERT INTO albums_eras(album_id, era_id) VALUES(7, 5);
INSERT INTO albums_eras(album_id, era_id) VALUES(8, 5);
INSERT INTO albums_eras(album_id, era_id) VALUES(9, 5);
INSERT INTO albums_eras(album_id, era_id) VALUES(10, 7);
INSERT INTO albums_eras(album_id, era_id) VALUES(11, 5);
INSERT INTO albums_eras(album_id, era_id) VALUES(12, 5);
INSERT INTO albums_eras(album_id, era_id) VALUES(13, 7);
INSERT INTO albums_eras(album_id, era_id) VALUES(14, 3);
INSERT INTO albums_eras(album_id, era_id) VALUES(15, 7);
INSERT INTO albums_eras(album_id, era_id) VALUES(16, 4);
INSERT INTO albums_eras(album_id, era_id) VALUES(17, 6);
INSERT INTO albums_eras(album_id, era_id) VALUES(18, 7);
INSERT INTO albums_eras(album_id, era_id) VALUES(19, 6);
INSERT INTO albums_eras(album_id, era_id) VALUES(20, 7);
INSERT INTO albums_eras(album_id, era_id) VALUES(21, 6);
INSERT INTO albums_eras(album_id, era_id) VALUES(23, 4);



SELECT albums.title, albums.year, genres.name AS genre
FROM albums
JOIN genres ON albums.genre_id = genres.id

SELECT albums.title, albums.title, genres.name AS genre
FROM albums
JOIN genres ON albums.genre_id = genres.id
WHERE genres.id = 6 

SELECT albums.title, albums.title, genres.name AS genre
FROM albums
JOIN genres ON albums.genre_id = genres.id
WHERE genres.name = 'World Music' 


SELECT genres.name, ARRAY_AGG(albums.title) AS albumtitle
FROM albums
JOIN genres ON genres.id = albums.genre_id  
JOIN albums_eras ON albums_eras.album_id = albums.id 
GROUP BY genres.id
