import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LwxWeatherPageComponent } from './lwx-weather-page.component';

describe('LwxWeatherPageComponent', () => {
  let component: LwxWeatherPageComponent;
  let fixture: ComponentFixture<LwxWeatherPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LwxWeatherPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LwxWeatherPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
