import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  authService = inject(AuthService)


  signIn(email: string, password: string) {

    if (!email) {
      alert("Email is required")
      return;
    }

    if (!password) {
      alert("Password is required")
      return;
    }


    this.authService.signIn({
       email, password
    })


  }


}
