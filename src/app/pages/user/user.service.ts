import { Injectable } from '@angular/core';

import { User } from '../../api/user';
import { Router } from '@angular/router';

const PATH = 'UserData';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private router: Router) { }

  public setUserInformation(value: User): void {
    window.localStorage.setItem(PATH, JSON.stringify(value));
  }

  public getUserInformation(): User {
    return JSON.parse(window.localStorage.getItem(PATH)) as User;
  }

  
}
