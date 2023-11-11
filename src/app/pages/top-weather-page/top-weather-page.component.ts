import { Component, OnInit, DoCheck } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsService } from '../../components/components.service';
import { DaysWeather } from '../../interfaces/weathers';
import { ChartComponent } from '../../components/chart/chart.component';

@Component({
  standalone: true,
  imports: [CommonModule, ChartComponent],
  templateUrl: './top-weather-page.component.html',
  styleUrl: './top-weather-page.component.css',
})
export class TopWeatherPageComponent implements OnInit {
  constructor(private componentsService: ComponentsService) {}
  ngOnInit(): void {
    this.componentsService.getDataFromFetch('TOP/31,80/forecast');
  }

  get dataWeather(): DaysWeather[] {
    return this.componentsService._dataFromFetch;
  }
}
