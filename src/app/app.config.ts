import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideFileRouter, routes } from '@analogjs/router';
import { provideContent, withMarkdownRenderer } from '@analogjs/content';
import { RouterFeatures, withViewTransitions } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideFileRouter(withViewTransitions()),
    provideHttpClient(withFetch()),
    provideClientHydration(),    
    provideContent(withMarkdownRenderer())

  ],
};
