package com.shresthabinod.backend.repositories;

import com.shresthabinod.backend.model.Book;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public class BookRepository implements CrudRepository<Book, String>() {
  Book findById(Integer id);

}
