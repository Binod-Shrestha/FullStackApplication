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

@RestController
@RequestMapping("/books")
public class BookController {
  @Autowired
  private BookService bookService;

  @GetMapping("")
  public List<Book> list() {
    return this.bookService.listAllBook();
  }

  // retrieving particular resource
  @GetMapping("/{id}")
  public ResponseEntity<Book> get(@PathVariable Integer id) {
    try {
      Book book = bookService.getBook(id);
      return new ResponseEntity<Book>(book, HttpStatus.OK);
    } catch (NoSuchElementException e) {
      return new ResponseEntity<Book>(HttpStatus.NOT_FOUND);
    }
  }
  // adding resource
  @PostMapping("")
  public void add(@RequestBody Book book){
    this.bookService.saveBook(book);
  }

  //updating particular resource
  @PutMapping("/{id}")
  public ResponseEntity<Book> update(@RequestBody Book book, @PathVariable Integer id){
    try {
      Book existingBook = this.bookService.getBook(id);
      this.bookService.saveBook(book);
      return new ResponseEntity<>(HttpStatus.OK);
    } catch (NoSuchElementException e){
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }
  @DeleteMapping("/{id}")
  public void deleteBookById(@PathVariable Integer id){
    this.bookService.deleteUser(id);
  }

}
