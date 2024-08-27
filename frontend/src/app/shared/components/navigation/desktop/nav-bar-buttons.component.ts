import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { LoginButtonComponent } from '../../buttons/login-button.component';
import { LogoutButtonComponent } from '../../buttons/logout-button.component';
import { SignupButtonComponent } from '../../buttons/signup-button.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-nav-bar-buttons',
  standalone: true,
  imports: [
    LoginButtonComponent, 
    LogoutButtonComponent, 
    SignupButtonComponent,
    AsyncPipe
  ],
  templateUrl: './nav-bar-buttons.component.html'
})
export class NavBarButtonsComponent {
  isAuthenticated$ = this.auth.isAuthenticated$

  constructor(private auth: AuthService) {}
}
