import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PostAttributes } from '../models/post';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ContentFile } from '@analogjs/content';

@Component({
  selector: 'app-post-item',
  standalone: true,
  imports: [RouterLink, CommonModule, NgOptimizedImage],
  template: `
    <article class="flex flex-col shadow my-4">
      <!-- Article Image -->
      <a [routerLink]="['/blog/', ArticleData.attributes.slug]" class="hover:opacity-75">
        <img
          [ngSrc]="ArticleData.attributes.coverImage" width="1000" height="300"
        />
      </a>
      <div class="bg-white flex flex-col justify-start p-6">
        <a [routerLink]="['/blog/', ArticleData.attributes.slug]" class="text-blue-700 text-sm font-bold uppercase pb-4"
          >Technology</a
        >
        <a [routerLink]="['/blog/', ArticleData.attributes.slug]" class="text-3xl font-bold hover:text-gray-700 pb-4"
          >{{ArticleData.attributes.title}}</a
        >
        <p [routerLink]="['/blog/', ArticleData.attributes.slug]" class="text-sm pb-3">
          By
          <a [routerLink]="['/blog/', ArticleData.attributes.slug]" class="font-semibold hover:text-gray-800">{{ArticleData.attributes.author }}</a>,
          Published on April 25th, 2020
        </p>
        <a href="#" class="pb-6"
          >{{ArticleData.attributes.description}}</a
        >
        <a [routerLink]="['/blog/', ArticleData.attributes.slug]" class="uppercase text-gray-800 hover:text-black"
          >Continue Reading <i class="fas fa-arrow-right"></i
        ></a>
      </div>
    </article>
  `,
  styles: ``,
})
export class PostItemComponent {
  @Input() ArticleData: ContentFile<PostAttributes> =
    {} as ContentFile<PostAttributes>;
}
