import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Subject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

const WORDPRESS_URL = 'https://testing-ng-proj.000webhostapp.com/wp-json/wp/v2';

const POSTS_URL = '/posts';

export interface IPost {
  id: number;
  title: {
    rendered: string;
  }
  content: {
    rendered: string;
  }
  excerpt: {
    rendered: string;
  }
  date: Date;
}

@Injectable()
export class WordpressService {
  posts: IPost[];
  post$: Subject<IPost> = new Subject();
  constructor(private http: HttpClient) { }

  getPosts(): Observable<IPost[]> {
    if (this.posts) {
      return of(this.posts);
    }
    return this.http.get<IPost[]>(`${WORDPRESS_URL}${POSTS_URL}`).pipe(
      tap((posts) => this.posts = posts)
    );
  }

  getPost(id) {
    if (this.posts) {
      const post = this.posts.find(post => post.id === id);
      post && this.post$.next(post);
    }

    this.http.get<IPost>(`${WORDPRESS_URL}${POSTS_URL}/${id}`).subscribe(post => this.post$.next(post));
  }
} 