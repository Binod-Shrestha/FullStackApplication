package com.shresthabinod.backend.model;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class Book {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private int id;
  private String bookName;
  private String publication;
  private int publishedYear;
  private int money;
  private int authorId;

  public Book() {
  }


}
