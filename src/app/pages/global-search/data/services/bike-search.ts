import { Injectable } from '@angular/core';
import { BikeSearchResult } from '../models/bike-search-result';
import { environment } from '../../../../../environments/environment';

interface SearchParams {
  page?: number;
  per_page?: number;
  location?: string;
  distance?: number;
  stolenness?: 'all' | 'stolen' | 'non' | 'proximity';
  manufacturer?: string;
  colors?: string;
  serial?: string;
  query?: string;
}

@Injectable({
  providedIn: 'root',
})
export class BikeSearch {
  protected env = environment;

  async searchBikes(params: SearchParams = {}): Promise<BikeSearchResult[]> {
    const searchParams = new URLSearchParams();

    if (params.page !== undefined) searchParams.append('page', params.page.toString());
    if (params.per_page !== undefined) searchParams.append('per_page', params.per_page.toString());
    if (params.location) searchParams.append('location', params.location);
    if (params.distance !== undefined) searchParams.append('distance', params.distance.toString());
    if (params.stolenness) searchParams.append('stolenness', params.stolenness);
    if (params.manufacturer) searchParams.append('manufacturer', params.manufacturer);
    if (params.colors) searchParams.append('colors', params.colors);
    if (params.serial) searchParams.append('serial', params.serial);
    if (params.query) searchParams.append('query', params.query);

    const url = `${this.env.apiUrl}/search?${searchParams.toString()}`;

    const response = await fetch(url);

    const data = await response.json();
    return data.bikes || [];
  }
}
