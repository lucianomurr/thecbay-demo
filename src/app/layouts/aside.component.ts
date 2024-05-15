import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- Sidebar Section -->
    <aside class="w-full flex flex-col items-center px-3">
      <div class="w-full bg-white shadow flex flex-col my-4 p-6">
        <p class="text-xl font-semibold pb-5">Analog</p>

        <h3>The fullstack meta-framework for Angular!</h3>

        <p>
          For guides on how to customize this project, visit the
          <a href="https://analogjs.org" class="underline" target="_blank"
            >Analog documentation</a
          >
        </p>

        <a href="https://analogjs.org/" target="_blank">
          <img alt="Analog Logo" class="logo analog" src="/analog.svg" />
        </a>

        <a href="https://thecmmbay.com/" target="_blank">
          <img
            alt="The Communities Bay"
            class="logo"
            src="/the-communities-bay.webp"
          />
        </a>
      </div>

      <div class="w-full bg-white shadow flex flex-col my-4 p-6">
        <p class="text-xl font-semibold pb-5">Instagram</p>
        <div class="grid grid-cols-3 gap-3">
          <img
            class="hover:opacity-75"
            src="https://source.unsplash.com/collection/1346951/150x150?sig=1"
          />
          <img
            class="hover:opacity-75"
            src="https://source.unsplash.com/collection/1346951/150x150?sig=2"
          />
          <img
            class="hover:opacity-75"
            src="https://source.unsplash.com/collection/1346951/150x150?sig=3"
          />
          <img
            class="hover:opacity-75"
            src="https://source.unsplash.com/collection/1346951/150x150?sig=4"
          />
          <img
            class="hover:opacity-75"
            src="https://source.unsplash.com/collection/1346951/150x150?sig=5"
          />
          <img
            class="hover:opacity-75"
            src="https://source.unsplash.com/collection/1346951/150x150?sig=6"
          />
          <img
            class="hover:opacity-75"
            src="https://source.unsplash.com/collection/1346951/150x150?sig=7"
          />
          <img
            class="hover:opacity-75"
            src="https://source.unsplash.com/collection/1346951/150x150?sig=8"
          />
          <img
            class="hover:opacity-75"
            src="https://source.unsplash.com/collection/1346951/150x150?sig=9"
          />
        </div>
      </div>
      
        
      
    </aside>
  `,
  styles: ``,
})
export class AsideComponent {
  
}
