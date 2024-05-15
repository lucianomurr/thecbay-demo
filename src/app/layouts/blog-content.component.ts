import { MarkdownComponent } from '@analogjs/content';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-content',
  standalone: true,
  imports: [MarkdownComponent],
  template: `
    <h1 class="text-2xl font-bold pb-3" data-text="An awesome title">
      {{ Title }}
    </h1>
    <div
      class="line-numbers blog-post container w-full pb-8 pt-4 md:w-11/12 md:px-0 lg:w-3/5"
    >
      <analog-markdown [content]="Content"></analog-markdown>
      {{ Content }}
    </div>
  `,
  styles: ``,
})
export class BlogContentComponent {
  @Input() Title: string = '';
  @Input() Content: string | object | undefined = '';
}
