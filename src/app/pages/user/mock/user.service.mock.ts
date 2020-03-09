import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../../api/user';

export function userFake(): User {
    return {
        name: "michael",
        email: "mhnakashima@gmail.com"
    } as User;
}

@Injectable({
    providedIn: 'root'
})

export class UserServiceFake {

    constructor(
        private http: HttpClient,
        private router: Router
    ) { }

    public setUserInformation(value: string): void {
        return null;
    }

    public getUserInformation(): void {
        return null;
    }
}

