import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
authService = inject(AuthService)
 

onRegister( username:string, email: string, password: string){

if (!username){
  alert(`Username is required`)
  return;
}

if (!email){
  alert(`email is required`)
  return;
}

if (!password){
  alert(`password is required`)
  return;
}

this.authService.onRegister({
  username, email, password,
  length: 0
})

}

}
