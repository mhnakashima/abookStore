import { Component, OnInit, ViewChild } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { MatGridList } from '@angular/material';
import { Book } from 'src/app/api/book';
import { UtilsService } from 'src/app/utils/utils.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('grid', {static: false}) grid: MatGridList;

  public authorName: string;
  public books: Book[];

  public breakpointGrid = {
    xl: 8,
    lg: 6,
    md: 4,
    sm: 2,
    xs: 1
  }

  constructor(
    private utils: UtilsService,
    private observableMedia: MediaObserver
  ) {}

  ngOnInit() {
    this.initializeComponent();
  }

  public async initializeComponent(): Promise<void> {
    this.books = await this.utils.getBooks();
  }
}
