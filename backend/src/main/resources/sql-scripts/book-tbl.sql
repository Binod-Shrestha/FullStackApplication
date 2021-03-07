use BookLibrary;
go
--exec sp_rename 'book.author_id', 'authorId', 'COLUMN';
--DROP TABLE dbo.book;
--CREATE TABLE book(
--bookId INTEGER PRIMARY KEY IDENTITY  NOT NULL,
--bookName VARCHAR(50) NOT NULL,
--publishedYear INTEGER,
--publisher VARCHAR(50),
--price MONEY,
--authorId INTEGER,
--CONSTRAINT FK_AuthorBook FOREIGN KEY (authorId) REFERENCES author(authorId)
--);

--INSERT SOME DUMMY DATA
--INSERT INTO dbo.book VALUES('SPRING BOOT', 2021, 'OXFORD', 250,100);
--ALTER TABLE BOOK DROP COLUMN authorId;
--INSERT INTO book VALUES('JAVA', 2021, 'OXFORD', 245.00, 1);
INSERT INTO book VALUES('ANGULAR', 2021, 'OXFORD', 245.00, 2);

SELECT * FROM BOOK;

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
