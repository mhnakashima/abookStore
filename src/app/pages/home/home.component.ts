import { Component, OnInit } from '@angular/core';

import { User } from '../../api/user';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public user$: User;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.initVariables();
  }

  public async initVariables(): Promise<void> {
    this.user$ = await this.userService.getUserInformation();
  }
}
