# FullStackApplication

This application is developed using Angular for front end, Spring Boot for back end and MySql for database.

## Angular 



## Spring Boot
### Controller
- BookController
### Services
- BookService
### Model
- Book
### Repositories
- BookRepository

### MySql database configuration in application.properties
- Configuration
spring.datasource.url=jdbc:mysql://${MYSQL_HOST:localhost}:3306/librarydb
spring.datasource.username=username
spring.datasource.password=password
spring.jpa.hibernate.naming_strategy=org.hibernate.cfg.EJB3NamingStrategy
spring.jpa.show-sql = true

## Database
- Book Table Script
CREATE TABLE BOOK(
bookId INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
bookName VARCHAR(50) NOT NULL,
publication VARCHAR(50),
publishedYear INT,
price DECIMAL
);
- 

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

