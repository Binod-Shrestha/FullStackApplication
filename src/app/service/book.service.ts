import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Book } from '../model/book';

@Injectable()
export class BookService {

//api uri
private apiURI: string;

  constructor( private http: HttpClient) {
   this.apiURI = 'http://localhost:8888/api/books';
   }

// get the list of books
findAll(): Observable<Book[]> {
return this.http.get<Book[]>(this.apiURI);
}
//get individual book
getBookById(id: number): Observable<any>{
return this.http.get(`${this.apiURI}/{id}`);
}

//createBook
createBook(book: Object): Observable<Object>{
return this.http.post(`${this.apiURI}`, book);
}
//update book record
updateBook(id: number, value: any): Observable<Object> {
return this.http.put(`${this.apiURI}/{id}`, value);
}
//delete individual book
deleteBookById(id: number): Observable<any> {
return this.http.delete(`${this.apiURI}/`+ id, {responseType: 'text'});
}

deleteBook(book: Object): Observable<Object>{
return this.http.delete(`${this.apiURI}/`)
}

save(book: Book) {
return this.http.post<Book>(this.apiURI, book);
}

}
