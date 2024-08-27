import { Component } from '@angular/core';
import { NavBarComponent } from './navigation/desktop/nav-bar.component';
import { PageFooterComponent } from './page-footer.component';

@Component({
  selector: 'app-page-layout',
  standalone: true,
  imports: [NavBarComponent, PageFooterComponent],
  template: `
    <div class="page-layout">
      <app-nav-bar></app-nav-bar>
      <div class="page-layout__content">
        <ng-content></ng-content>
      </div>
      <app-page-footer></app-page-footer>
    </div>
  `
})
export class PageLayoutComponent {

}
