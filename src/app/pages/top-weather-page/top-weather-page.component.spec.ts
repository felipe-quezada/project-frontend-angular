import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopWeatherPageComponent } from './top-weather-page.component';

describe('TopWeatherPageComponent', () => {
  let component: TopWeatherPageComponent;
  let fixture: ComponentFixture<TopWeatherPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopWeatherPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopWeatherPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
