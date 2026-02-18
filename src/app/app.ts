import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideAlertTriangle,
  lucideFileText,
  lucideHeart,
  lucideHelpCircle,
  lucideMenu,
  lucideSearch,
  lucideStore,
} from '@ng-icons/lucide';
import { HlmIconImports } from '@spartan-ng/helm/icon';

import { HlmButtonImports } from '@spartan-ng/helm/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HlmIconImports, HlmButtonImports, NgIcon],
  templateUrl: './app.html',
  styleUrl: './app.css',
  providers: [
    provideIcons({
      lucideMenu,
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
