import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import {postsAnimation} from './../animations';

import { WordpressService } from './../core/wordpress.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  animations: [postsAnimation]
})
export class PostComponent implements OnInit {
  post$;
  constructor(private route: ActivatedRoute, private wordpressService: WordpressService) {
    this.post$ = this.wordpressService.post$;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.wordpressService.getPost(params.id);
    })
  }

}