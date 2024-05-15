import { injectContentFiles } from '@analogjs/content';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PostAttributes } from '../models/post';
import { CommonModule } from '@angular/common';
import { PostItemComponent } from "./post-item.component";

@Component({
    selector: 'app-posts',
    standalone: true,
    template: `
    <!-- Posts Section -->
    <section class="w-full flex flex-col items-center">

      @for (post of posts; track post.slug) {
        
        <app-post-item [ArticleData]="post" />

      }
    </section>
  `,
    styles: ``,
    imports: [RouterLink, CommonModule, PostItemComponent]
})
export class PostsComponent {
  posts = injectContentFiles<PostAttributes>();

}
