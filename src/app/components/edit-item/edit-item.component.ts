import { Component, OnInit } from '@angular/core';
import { Book } from '../../model/book';
import { BookService } from '../../service/book.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {
book: Book;
id: number = null;
  constructor(private route: ActivatedRoute, private bookService: BookService, private router: Router) { }

  ngOnInit() {
  this.book = new Book();

      this.id = this.route.snapshot.params['id'];
      console.log(this.id);
      this.bookService.getBookById(this.id)
        .subscribe(data => {
          console.log(data)
          this.book = data;
        }, error => console.log(error));
  }

updateBook() {
    this.bookService.updateBook(this.id, this.book)
      .subscribe(data => {
        console.log(data);
        this.book = new Book();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    alert("A book record has been updated to library.");
    this.updateBook();
  }
gotoList() {
    this.router.navigate(['']);
  }
}
