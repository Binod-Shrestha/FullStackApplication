
use BookLibrary;
go


----DROP TABLE author;
--CREATE TABLE author(
--authorId INTEGER PRIMARY KEY IDENTITY NOT NULL,
--author VARCHAR(50) NOT NULL,
--address VARCHAR(50),
--email VARCHAR(90),
--);
--ADDING IDENTITY FOR AUTO INCREMENT
--ALTER TABLE author
--ADD CONSTRAINT fk_authorId IDENTITY (bookId, authorId);
--INSERT INTO author VALUES('Binod Shrestha', '6 Berringer Grove', 'abc@abc.com');
INSERT INTO author VALUES('Aayush Shrestha', '6 Berringer Grove', 'abc@abc.com');

SELECT * FROM AUTHOR;
--DROP TABLE author;
CREATE TABLE author(
authorId INTEGER PRIMARY KEY NOT NULL,
author VARCHAR(50) NOT NULL,
address VARCHAR(50),
email VARCHAR(90),
);
