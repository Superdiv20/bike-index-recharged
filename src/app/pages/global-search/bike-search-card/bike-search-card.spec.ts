import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeSearchCard } from './bike-search-card';

describe('BikeSearchCard', () => {
  let component: BikeSearchCard;
  let fixture: ComponentFixture<BikeSearchCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BikeSearchCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BikeSearchCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
