import { AsyncPipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SharedModule } from '../../shared';
import { AuthService } from '@auth0/auth0-angular';
import { map } from 'rxjs';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    SharedModule,
    AsyncPipe
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  title = 'Decoded ID Token';

  user$ = this.auth.user$;

  code$ = this.user$.pipe(map((user) => JSON.stringify(user, null, 2)));

  constructor(private auth: AuthService) {}
}
