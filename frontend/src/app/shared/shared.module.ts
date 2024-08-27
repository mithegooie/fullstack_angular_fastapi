import { NgModule } from '@angular/core';
import { COMPONENTS } from './components';


@NgModule({
  declarations: [],
  imports: [
    ...COMPONENTS,
  ],
  exports: [
    ...COMPONENTS,
  ],
})
export class SharedModule { }
