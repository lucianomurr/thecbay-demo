import { Component } from '@angular/core';
import { PostsComponent } from '../layouts/posts.component';
import { AsideComponent } from '../layouts/aside.component';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="container mx-auto flex flex-wrap py-6">
      <app-posts class="w-full md:w-2/3 flex flex-col items-center px-3" />
      <app-aside class="w-full md:w-1/3 flex flex-col items-center px-3" />
    </div>
  `,
  styles: [
    `
      .logo {
        will-change: filter;
      }
      .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
      }
      .read-the-docs {
        color: #888;
      }
    `,
  ],
  imports: [PostsComponent, AsideComponent],
})
export default class HomeComponent {}
