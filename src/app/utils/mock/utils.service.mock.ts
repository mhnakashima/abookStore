import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Book } from '../../api/book';
import { DataMock, DataMockItem } from './data.mock';

@Injectable({
    providedIn: 'root'
})
export class UtilsServiceFake {

    constructor(
        private http: HttpClient,
        private router: Router
    ) { }

    public getBooks(): Observable<Book[]> {
        return Observable.create(
            observer => {
                observer.next(DataMock());
            }
        )
    }

    public getBookById(id: string): Observable<Book> {
        return Observable.create(
            observer => {
                observer.next(DataMockItem());
            }
        )
    }

    public saveBook(bookToSave: Book): Promise<any> {
        return new Promise(resolve => {
			resolve(null);
		});
    }

    public saveEditedBook(id: string, bookToSave: Book): Promise<any> {
        return new Promise(resolve => {
			resolve(null);
		});
    }

    public deleteBook(id: string): Promise<any> {
        return new Promise(resolve => {
			resolve(null);
		});
    }

    public redirectToPage(page: string): void {
        return null;
    }
}
