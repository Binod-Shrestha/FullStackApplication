import { Component, OnInit } from '@angular/core';
import { Book } from '../../model/book';
import { BookService } from '../../service/book.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'

})
export class MainComponent implements OnInit {
books: Book[] = [];
currentBook = new Book();
isUpdateRecord: boolean = false;
  constructor( private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();

  }

  reloadData(){
  this.bookService.findAll().subscribe(data => {
    this.books = data;
  })
  }
getOneBook(id: number): void {
    this.bookService.getBookById(id)
    .subscribe(
        data => {
        this.currentBook = data;
        console.log(data);
      },
    error => {console.log(error);}
);

}
  deleteBook(id: number): void {
  console.log("id from frontend: " + id);
  this.bookService.deleteBookById(id)
        .subscribe(
            data => {
            console.log(data);
            this.reloadData();
          },
          error => {console.log(error);}
          );
  }


  editBook(id: number): void {
  this.bookService.updateBook(id, this.currentBook)
    .subscribe(
        data => {
          console.log(data);
          this.isUpdateRecord= true;
        },
        error => {console.log(error);
        }
        );

  }
}
