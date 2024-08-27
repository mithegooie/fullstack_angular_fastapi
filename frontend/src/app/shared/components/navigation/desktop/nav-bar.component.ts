import { Component } from '@angular/core';
import { NavBarBrandComponent } from './nav-bar-brand.component';
import { NavBarTabsComponent } from './nav-bar-tabs.component';
import { NavBarButtonsComponent } from './nav-bar-buttons.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    NavBarBrandComponent, 
    NavBarTabsComponent, 
    NavBarButtonsComponent
  ],
  template: `
    <div class="nav-bar__container">
      <nav class="nav-bar">
        <app-nav-bar-brand></app-nav-bar-brand>
        <app-nav-bar-tabs></app-nav-bar-tabs>
        <app-nav-bar-buttons></app-nav-bar-buttons>
      </nav>
    </div>
  `
})
export class NavBarComponent {}
