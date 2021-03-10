import { Component, OnInit } from '@angular/core';
import { Book } from '../../model/book';
import { BookService } from '../../service/book.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
books: Book[]=[];
  constructor( private bookService: BookService) { }

  ngOnInit(): void {
  this.bookService.findAll().subscribe(data => {
  this.books = data;
  })
  }
}
