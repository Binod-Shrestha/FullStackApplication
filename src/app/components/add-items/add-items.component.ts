import { Component, OnInit } from '@angular/core';
import { Book } from '../../model/book';
import { BookService } from '../../service/book.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.scss']
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
      },
      error => {console.log(error);
      });

  }

}
