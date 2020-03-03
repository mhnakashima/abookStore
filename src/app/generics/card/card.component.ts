import { Component, OnInit, Input } from '@angular/core';
import { Book } from './../../api/book';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() book:Book;

  constructor() { }

  ngOnInit() {
  }

}
