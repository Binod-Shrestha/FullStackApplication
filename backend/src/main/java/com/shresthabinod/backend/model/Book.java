package com.shresthabinod.backend.model;

import javax.persistence.*;

@Entity
@Table(name= "book")
public class Book {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(name = "bookid")
  private int bookId;
  @Column(name = "bookname")
  private String bookName;
  @Column(name = "publication")
  private String publication;
  @Column(name = "publishedyear")
  private int publishedYear;
  @Column(name = "price")
  private double price;
// default constructor
  public Book() {
  }
//constructor with params
  public Book( String bookName, String publication, int publishedYear, double price) {
    this.bookName = bookName;
    this.publication = publication;
    this.publishedYear = publishedYear;
    this.price = price;
  }

  //GETTERS/SETTERS
  public int getId() {
    return bookId;
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

  public double getPrice() {
    return price;
  }

  public void setPrice(int price) {
    this.price = price;
  }

  @Override
  public String toString() {
    return "Book{" +
      "id=" + bookId +
      ", bookName='" + bookName + '\'' +
      ", publication='" + publication + '\'' +
      ", publishedYear=" + publishedYear +
      ", money=" + price +
      '}';
  }
}
