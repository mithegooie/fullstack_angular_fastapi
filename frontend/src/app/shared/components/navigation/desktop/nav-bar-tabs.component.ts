import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { NavBarTabComponent } from './nav-bar-tab.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-nav-bar-tabs',
  standalone: true,
  imports: [
    NavBarTabComponent,
    AsyncPipe
  ],
  templateUrl: './nav-bar-tabs.component.html'
})
export class NavBarTabsComponent {
  isAuthenticated$ = this.auth.isAuthenticated$;

  constructor(private auth: AuthService) {}
}
