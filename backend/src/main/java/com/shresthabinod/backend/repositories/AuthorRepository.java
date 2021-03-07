package com.shresthabinod.backend.repositories;

import com.shresthabinod.backend.model.Author;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public class AuthorRepository implements CrudRepository<Author, Integer>() {
}
