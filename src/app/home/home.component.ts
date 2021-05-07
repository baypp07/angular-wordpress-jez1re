import { Component, OnInit } from '@angular/core';
import {tap} from 'rxjs/operators';

import { WordpressService } from './../core/wordpress.service';
import {postsAnimation} from './../animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [postsAnimation]
})
export class HomeComponent implements OnInit {
  loading = true;
  posts$ = this.wordpressService.getPosts().pipe(tap(() => this.loading= false));

  constructor(private wordpressService: WordpressService) { }

  ngOnInit() {
  }

}