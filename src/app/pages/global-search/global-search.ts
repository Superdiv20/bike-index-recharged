import { Component, inject, signal } from '@angular/core';
import { BikeSearchResult } from './data/models/bike-search-result';
import { BikeSearch } from './data/services/bike-search';
import { HlmItemImports } from '@spartan-ng/helm/item';

@Component({
  selector: 'app-global-search',
  imports: [HlmItemImports],
  templateUrl: './global-search.html',
  styleUrl: './global-search.css',
})
export class GlobalSearch {
  protected readonly bikes = signal<BikeSearchResult[]>([]);

  private readonly bikeSearch = inject(BikeSearch);

  constructor() {
    this.bikeSearch.searchBikes({ page: 1, per_page: 25 }).then((results) => {
      this.bikes.set(results);
    });
  }
}
