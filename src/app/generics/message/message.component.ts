import { Component, OnInit, Input, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  public message: string;

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { 
    this.message = data;
  }

  ngOnInit(): void {
  }

}
