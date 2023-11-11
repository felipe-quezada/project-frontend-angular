import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsService } from '../../components/components.service';
import { DaysWeather } from '../../interfaces/weathers';
import { ChartComponent } from '../../components/chart/chart.component';

@Component({
  standalone: true,
  imports: [CommonModule, ChartComponent],
  templateUrl: './lwx-weather-page.component.html',
  styleUrl: './lwx-weather-page.component.css',
})
export class LwxWeatherPageComponent implements OnInit {
  constructor(private componentsService: ComponentsService) {}
  ngOnInit(): void {
    this.componentsService.getDataFromFetch('LWX/31,80/forecast');
  }

  get dataWeather(): DaysWeather[] {
    return this.componentsService._dataFromFetch;
  }
}
