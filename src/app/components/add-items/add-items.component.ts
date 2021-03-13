import { Component, OnInit } from '@angular/core';
import { Book } from '../../model/book';
import { BookService } from '../../service/book.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html'
})
export class AddItemsComponent implements OnInit {

  constructor(private bookService: BookService, private router: Router) { }
  book: Book = new Book();
  ngOnInit(): void {
  }
  addBook(): void {
    this.bookService.createBook(this.book)
      .subscribe(
      data => {
      alert("A new book added to library.");
      this.gotoList();

      },
      error => {console.log(error);
      });

  }

  gotoList() {
      this.router.navigate(['']);
    }


}
