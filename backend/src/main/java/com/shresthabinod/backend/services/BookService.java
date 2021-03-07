package com.shresthabinod.backend.services;

import com.shresthabinod.backend.model.Book;
import com.shresthabinod.backend.repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class BookService {
  // inject repository
  @Autowired
  private BookRepository bookRepository;

  //Business Logics: CRUD

  public List<Book> listAllBook(){
    return bookRepository.findAll();
  }

  public void saveBook(Book book){
    this.bookRepository.save(book);
  }

  public Book getBook(Integer id){
    return this.bookRepository.findById(id).get();
  }
  public void deleteUser(Integer id){
    this.bookRepository.deleteById(id);
  }

}
