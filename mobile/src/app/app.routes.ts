import { Routes } from '@angular/router';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
    {path: "login", component: SignInComponent},
    {path: "register", component:RegisterComponent},
    {path: "home", component: HomeComponent},
    {path: "about", component: AboutComponent},
    {path: "settings", component: SettingsComponent},
    {path: "profile", component: ProfileComponent}
];
