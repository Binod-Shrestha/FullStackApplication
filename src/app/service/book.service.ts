import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Book } from '../model/book';

@Injectable()
export class BookService {

//api uri
private apiURI: string;

  constructor( private http: HttpClient) {
   this.apiURI = 'http://localhost:8080/api/books';
   }

// get the list of books
findAll(): Observable<Book[]> {
return this.http.get<Book[]>(this.apiURI);
}
save(book: Book) {
return this.http.post<Book>(this.apiURI, book);
}

}
