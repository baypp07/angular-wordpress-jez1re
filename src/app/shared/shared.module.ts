import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

const SHARED_COMPONENTS = [HeaderComponent]
@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: SHARED_COMPONENTS,
  exports: SHARED_COMPONENTS
})
export class SharedModule { }