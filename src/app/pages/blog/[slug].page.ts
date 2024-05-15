import { MarkdownComponent, injectContent } from '@analogjs/content';
import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { PostAttributes } from 'src/app/models/post';

@Component({
  standalone: true,
  imports: [MarkdownComponent, NgIf, AsyncPipe],
  template: `
    <div class="content" *ngIf="post$ | async as post">
      <section class="wrapper" >
        <div>
          <h2 class="h1--scalingSize" data-text="An awesome title">
            {{ post.attributes.title }}
          </h2>
        </div>
      </section>
      <img [src]="post.attributes.coverImage" />
      <analog-markdown [content]="post.content" />
    </div>
  `,
  styles: `
  
  h2{
    font-size: 6rem;
    padding: 2rem 0;
  }

  `,
})
export default class BlogPostPage {
  post$ = injectContent<PostAttributes>();
}
