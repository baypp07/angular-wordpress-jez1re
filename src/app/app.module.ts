import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { RoutingModule } from './routing.module';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, CoreModule, SharedModule, RoutingModule, BrowserAnimationsModule ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, PostComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
