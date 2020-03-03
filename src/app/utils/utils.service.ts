import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Book } from '../api/book';

const path: string = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private http: HttpClient) { }

  public async getBooks(): Promise<Book[]>{
    return this.http.get<Book[]>(`${path}/stock`).toPromise();
  }
}
