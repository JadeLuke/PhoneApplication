import { inject, Injectable } from '@angular/core';
import { UserInterface } from '../types/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: UserInterface[] = [];
  router = inject(Router)


  constructor() { }

  onRegister(userData: UserInterface) {
    const userEmail = userData.email;

    for (let i = 0; i < this.users[1].length; i++) {
      if (this.users[1].email === userEmail){
        alert(`${userEmail} is taken`);
        return
      }
    }

     this.users.push(userData);
     
     alert(`${userData.username} was registered successfully`)
     this.router.navigate(['/login'])
      
  }





}
 