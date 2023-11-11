import { Component, Input, DoCheck } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaysWeather } from '../../interfaces/weathers';
import { Chart } from 'chart.js';
import 'chart.js/auto';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css',
})
export class ChartComponent implements DoCheck {
  @Input()
  public weatherList: DaysWeather[] = [];
  public chart?: Chart<'line', number[], string>;

  get labels() {
    let _labels: string[] = [];
    this.weatherList.forEach((w) => _labels.push(w.name));
    return _labels;
  }

  get data() {
    let _data: number[] = [];
    this.weatherList.forEach((w) => _data.push(w.temperature));
    return _data;
  }

  createChart() {
    this.chart = new Chart('myChart', {
      type: 'line',
      data: {
        labels: this.labels,
        datasets: [
          {
            label: this.weatherList[0].temperatureUnit,
            data: this.data,
            backgroundColor: 'orange',
            yAxisID: 'F',
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
        responsive: true,
      },
    });
  }

  ngDoCheck(): void {
    this.createChart();
  }
}
