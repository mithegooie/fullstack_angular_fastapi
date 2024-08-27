import { Component } from '@angular/core';
import { SharedModule } from '../../shared';
import { AuthService } from '@auth0/auth0-angular';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-callback',
  standalone: true,
  imports: [
    SharedModule,
    AsyncPipe
  ],
  templateUrl: './callback.component.html',
  styleUrl: './callback.component.scss'
})
export class CallbackComponent {
  error$ = this.auth.error$;

  constructor(private auth: AuthService) {}
}
