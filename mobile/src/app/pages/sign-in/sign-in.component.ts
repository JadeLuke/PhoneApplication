import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

signInObj: any = {
  username: "",
  password: ""
}

router = inject(Router)

signIn(){
  if( this.signInObj.username === "Admin" && this.signInObj.password === "123"){
      // this.router.navigateByUrl('/home')
      console.log(` Username is ${this.signInObj.username} and password is ${this.signInObj.password}`);
    }
  else if (this.signInObj.username === "Murendeni" && this.signInObj.password === "234"){
    // this.router.navigateByUrl('/home')
    console.log(` Username is ${this.signInObj.username} and password is ${this.signInObj.password}`);
  }
  else if (this.signInObj.username === "User2" && this.signInObj.password === "345"){
    // this.router.navigateByUrl('/home')
    console.log(` Username is ${this.signInObj.username} and password is ${this.signInObj.password}`);
  }
  else if (this.signInObj.username && this.signInObj.password){
    console.log(` Username is ${this.signInObj.username} and password is ${this.signInObj.password}`);

  }
  else{
    alert("wrong details")
  }
}

}
