import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- Text Header -->
    <header class="w-full container mx-auto">
        <div class="flex flex-col items-center py-12">
            <a class="font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl" href="#">
                The Communities Bay Blog
            </a>
            <p class="text-lg text-gray-600">
                A simply blog made by Analog with <i class="fas fa-heart text-red-600"></i>
            </p>
        </div>
    </header>
  `,
  styles: ``,
})
export class HeaderComponent {}
