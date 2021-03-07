
use BookLibrary;
go

--DROP TABLE author;
CREATE TABLE author(
authorId INTEGER PRIMARY KEY NOT NULL,
author VARCHAR(50) NOT NULL,
address VARCHAR(50),
email VARCHAR(90),
);