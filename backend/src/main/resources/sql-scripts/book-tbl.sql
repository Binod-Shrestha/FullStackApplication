use BookLibrary;
go
--DROP TABLE dbo.book;
CREATE TABLE book(
bookId INTEGER PRIMARY KEY IDENTITY  NOT NULL,
bookName VARCHAR(50) NOT NULL,
publishedYear INTEGER,
publisher VARCHAR(50),
price MONEY,
author_id INTEGER,
CONSTRAINT fk_authorId FOREIGN KEY (bookId) REFERENCES author(authorId)
);