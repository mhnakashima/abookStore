import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from '../api/book';


const path: string = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${path}/stock`);
  }

  public getBookById(id: string): Observable<Book> {
    return this.http.get<Book>(`${path}/stock/${id}`);
  }

  public saveBook(bookToSave: Book): Promise<any> {
    return this.http.post(`${path}/stock`, bookToSave).toPromise();
  }

  public saveEditedBook(id: string, bookToSave: Book): Promise<any> {
    return this.http.put(`${path}/stock/${id}`, bookToSave).toPromise();
  }

  public deleteBook(id: string): Promise<any> {
    return this.http.delete(`${path}/stock/${id}`).toPromise();
  }

  public redirectToPage(page: string): void {
    this.router.navigate([page]);
  }
}
