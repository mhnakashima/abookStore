import { Component, OnInit } from '@angular/core';
import { User } from '../../api/user';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user/user.service';
import { MatSnackBar } from '@angular/material';
import { MessageComponent } from '../../generics/message/message.component';

const emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public user: User = new User();
  public userFormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.min(3), Validators.max(30)]),
    email: new FormControl('', [Validators.required, Validators.pattern(emailPattern)])
  })

  public message: string = '';

  constructor(
    private userService: UserService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    if (this.userFormGroup.valid) {
      
      this.message = "Salvo com sucesso!";
      this.userService.setUserInformation(this.userFormGroup.value);
      this._snackBar.openFromComponent(MessageComponent, {
        duration: 1000, data: this.message
      });
    }
  }
}
