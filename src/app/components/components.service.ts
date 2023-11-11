import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DaysWeather, Weather, Weathers } from '../interfaces/weathers';

@Injectable({
  providedIn: 'root',
})
export class ComponentsService {
  public _dataFromFetch: DaysWeather[] = [];

  constructor(private http: HttpClient) {}
  getDataFromFetch(url: string) {
    this.http
      .get<Weathers>(`https://api.weather.gov/gridpoints/${url}`)
      .subscribe((res) => {
        this._dataFromFetch = [];
        res.properties.periods.forEach(
          ({ name, temperature, temperatureUnit }) =>
            (this._dataFromFetch = [
              ...this._dataFromFetch,
              { name, temperature, temperatureUnit },
            ])
        );
      });
  }
}
