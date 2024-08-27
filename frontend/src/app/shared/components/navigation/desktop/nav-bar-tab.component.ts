import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar-tab',
  standalone: true,
  imports: [RouterLink],
  template: `
    <a
      [routerLink]="path"
      class="nav-bar__tab"
      routerLinkActive="nav-bar__tab--active"
    >
      {{ label }}
    </a>
  `
})
export class NavBarTabComponent {
  @Input() path: string | undefined;
  @Input() label: string | undefined;
}
