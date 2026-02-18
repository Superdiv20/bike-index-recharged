import { Component, computed, input } from '@angular/core';
import { BikeSearchResult } from '../data/models/bike-search-result';
import { HlmItemMedia } from '@spartan-ng/helm/item';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBike, lucideClock, lucideMapPin, lucidePalette } from '@ng-icons/lucide';
import { DatePipe, TitleCasePipe } from '@angular/common';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
  selector: 'app-bike-search-card',
  imports: [HlmItemMedia, NgIcon, HlmIcon, DatePipe, TitleCasePipe],
  templateUrl: './bike-search-card.html',
  providers: [
    provideIcons({
      lucideMapPin,
      lucidePalette,
      lucideClock,
      lucideBike,
    }),
  ],
})
export class BikeSearchCard {
  public readonly bike = input.required<BikeSearchResult>();
  public readonly colors = computed(() => this.bike().frame_colors.join(', '));
  public readonly stolenDate = computed(() => new Date(this.bike().date_stolen * 1000));
}
