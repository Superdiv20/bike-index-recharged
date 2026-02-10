import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { provideIcons } from '@ng-icons/core';
import {
  lucideAlertTriangle,
  lucideFileText,
  lucideHeart,
  lucideHelpCircle,
  lucideSearch,
  lucideStore,
} from '@ng-icons/lucide';
import { HlmIconImports } from '@spartan-ng/helm/icon';

import { HlmNavigationMenuImports } from '@spartan-ng/helm/navigation-menu';
import { HlmButtonImports } from '@spartan-ng/helm/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HlmNavigationMenuImports, HlmIconImports, HlmButtonImports],
  templateUrl: './app.html',
  styleUrl: './app.css',
  providers: [
    provideIcons({
      lucideSearch,
      lucideStore,
      lucideFileText,
      lucideHeart,
      lucideAlertTriangle,
      lucideHelpCircle,
    }),
  ],
})
export class App {
  protected readonly title = signal('bike-index-recharged');

  protected readonly navigationMenuItems = [
    {
      label: 'Search',
      icon: 'lucideSearch',
      route: '/search',
      disabled: false,
    },
    {
      label: 'Marketplace',
      icon: 'lucideStore',
      route: '/marketplace',
      disabled: true,
    },
    {
      label: 'Blog',
      icon: 'lucideFileText',
      route: '/blog',
      disabled: true,
    },
    {
      label: 'Donate',
      icon: 'lucideHeart',
      route: '/donate',
      disabled: false,
    },
    {
      label: 'Stolen Bike?',
      icon: 'lucideAlertTriangle',
      route: '/stolen-bike',
      disabled: false,
    },
    {
      label: 'Help',
      icon: 'lucideHelpCircle',
      route: '/help',
      disabled: false,
    },
  ];
}
