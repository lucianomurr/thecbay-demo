import { injectContent } from '@analogjs/content';
import { AsyncPipe, NgIf, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { PostAttributes } from 'src/app/models/post';
import { BlogContentComponent } from "../../layouts/blog-content.component";

@Component({
    standalone: true,
    template: `
    <div class="container mx-auto flex flex-wrap py-6">
      <!-- Post Section -->
      <section class="w-full md:w-2/3 flex flex-col items-center px-3">
        <article
          class="flex flex-col shadow my-4"
          *ngIf="post$ | async as post"
        >
          <!-- Article Image -->
          <a href="#" class="hover:opacity-75">
            <img
              [ngSrc]="post.attributes.coverImage"
              width="1000"
              height="500"
            />
          </a>

          <app-blog-content [Title]="post.attributes.title" [Content]="post.content"/>

        </article>
      </section>
    </div>
  `,
    styles: ``,
    imports: [NgIf, AsyncPipe, NgOptimizedImage, BlogContentComponent]
})
export default class BlogPostPage {
  post$ = injectContent<PostAttributes>();
}
