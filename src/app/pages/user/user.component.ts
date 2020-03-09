import { Component, OnInit } from '@angular/core';

import { Book } from './../../api/book';
import { UtilsService } from './../../utils/utils.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
 
  public authorName: string;
  public books: Book[];

  constructor(
    private utils: UtilsService,
  ) { }

  ngOnInit() {
    this.initializeComponent();
  }

  public async initializeComponent(): Promise<void> {
    //this.books = await this.utils.getBooks().toPromise();
  }
  
}
