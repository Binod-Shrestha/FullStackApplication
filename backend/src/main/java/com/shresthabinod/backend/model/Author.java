package com.shresthabinod.backend.model;

import net.bytebuddy.dynamic.loading.InjectionClassLoader;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Author {
  @Id
  @GeneratedValue(strategy= GenerationType.AUTO)
  private int id;
  private String author;
  private String address;
  private String email;

}
