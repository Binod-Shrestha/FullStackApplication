package com.shresthabinod.backend.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.shresthabinod.backend.model.Book;
import com.shresthabinod.backend.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class BookController {
  @Autowired
  private BookService bookService;

  @GetMapping("/books")
  public List<Book> list() {
    return this.bookService.listAllBook();
  }

  // retrieving particular resource
  @GetMapping("/books/{id}")
  public ResponseEntity<Book> get(@PathVariable int id) {
    try {
      Book book = bookService.getBookById(id);
      return new ResponseEntity<Book>(book, HttpStatus.OK);
    } catch (NoSuchElementException e) {
      return new ResponseEntity<Book>(HttpStatus.NOT_FOUND);
    }
  }

  // adding resource
  @PostMapping("/books")
  public void add(@RequestBody Book book) {
    this.bookService.saveBook(book);
  }

  //updating particular resource
  @PutMapping("/books/{id}")
  public ResponseEntity<Book> update(@RequestBody Book book, @PathVariable int id) {
    try {
      Book existingBook = this.bookService.getBookById(id);
      this.bookService.saveBook(book);
      return new ResponseEntity<>(HttpStatus.OK);
    } catch (NoSuchElementException e) {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }

  @DeleteMapping("/books/{id}")
  public ResponseEntity<String> deleteBook(@PathVariable(value = "id") int id) {
    System.out.println("book id:" + id);
    try {
      Book book = bookService.getBookById(id);

      bookService.deleteBook(book);
      return new ResponseEntity<>(HttpStatus.OK);
    } catch (NoSuchElementException e) {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

  }

}
