package com.shresthabinod.backend.model;

import javax.persistence.*;

@Entity
@Table(name= "book")
public class Book {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;
  private String bookName;
  private String publication;
  private int publishedYear;
  private int money;
// default constructor
  public Book() {
  }
//constructor with params
  public Book( String bookName, String publication, int publishedYear, int money) {

    this.bookName = bookName;
    this.publication = publication;
    this.publishedYear = publishedYear;
    this.money = money;
  }

  //GETTERS/SETTERS
  public int getId() {
    return id;
  }

  public String getBookName() {
    return bookName;
  }

  public void setBookName(String bookName) {
    this.bookName = bookName;
  }

  public String getPublication() {
    return publication;
  }

  public void setPublication(String publication) {
    this.publication = publication;
  }

  public int getPublishedYear() {
    return publishedYear;
  }

  public void setPublishedYear(int publishedYear) {
    this.publishedYear = publishedYear;
  }

  public int getMoney() {
    return money;
  }

  public void setMoney(int money) {
    this.money = money;
  }

  @Override
  public String toString() {
    return "Book{" +
      "id=" + id +
      ", bookName='" + bookName + '\'' +
      ", publication='" + publication + '\'' +
      ", publishedYear=" + publishedYear +
      ", money=" + money +
      '}';
  }
}
