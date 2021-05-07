import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'home'
},{
  path: 'home',
  component: HomeComponent,
  data: {
    routeState: 1
  }
}, {
  path: 'about',
  loadChildren: './about/about.module#AboutModule',
  data: {
    routeState: 2
  }
}, {
  path: 'contact',
  loadChildren: './contact/contact.module#ContactModule',
  data: {
    routeState: 3
  }
}, {
  path: 'post/:id/:slug',
  component: PostComponent,
  data: {
    routeState: 4
  }
}];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RoutingModule { }