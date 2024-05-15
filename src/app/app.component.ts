import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layouts/header.component';
import { NavbarComponent } from "./layouts/navbar.component";
import { FooterComponent } from "./layouts/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
      <app-navbar />
      <app-header />
      <router-outlet></router-outlet>
      <app-footer />
  `,
    styles: [``,
    ],
    imports: [RouterOutlet, HeaderComponent, NavbarComponent, FooterComponent]
})
export class AppComponent {}
