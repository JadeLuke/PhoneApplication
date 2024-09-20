import { inject, Injectable } from '@angular/core';
import { UserInterface } from '../types/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  read() {
    throw new Error('Method not implemented.');
  }
  users: UserInterface[] = [];
  router = inject(Router)


  constructor() { }

  onRegister(userData: UserInterface) {
    const userEmail = userData.email;
    console.log(userData);
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].email === userEmail){
        alert(`${userEmail} is taken`);
        return
      }
    }

     this.users.push(userData);
     
     alert(`${userData.username} was registered successfully`)
     this.router.navigate(['/login'])
      
  }

 signIn(userData: UserInterface){
   console.log(userData);

  for (let i = 0; i < this.users.length; i++) {

    if(this.users[i].email === userData.email && this.users[i].password === userData.password){
      alert(`Welcome ${this.users[i].username}`)
      this.router.navigateByUrl('/profile')
    }
    else{
      alert(`wrong details`)
    } 
  }
  }
}
 