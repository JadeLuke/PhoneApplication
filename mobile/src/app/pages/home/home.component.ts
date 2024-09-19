import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../../UI/shared-UI/navbar/navbar.component';
import { Router } from '@angular/router';
import { SidebarComponent } from '../../UI/shared-UI/sidebar/sidebar.component';
import { SignInComponent} from '../sign-in/sign-in.component';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, SidebarComponent, SignInComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
router = inject(Router)
 

names = "jazi";
htmlContent = this.names;

signOut() {
  this.router.navigateByUrl('/')

}

}
