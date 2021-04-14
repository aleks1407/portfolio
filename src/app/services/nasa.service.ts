import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  nasaApi: string = '2gDfg3eK2vd9GjorCpYz6hskvvfnjErul3UCAjb1';

  constructor(private http: HttpClient) { }

  getNasa(): Observable<any> {
    // return this.http.get<any>('https://api.nasa.gov/planetary/apod?start_date=2021-04-01&end_date=2021-04-08&api_key=2gDfg3eK2vd9GjorCpYz6hskvvfnjErul3UCAjb1')
    return this.http.get<any>('https://api.nasa.gov/planetary/apod?start_date=2021-01-01&end_date=2021-04-09&api_key=2gDfg3eK2vd9GjorCpYz6hskvvfnjErul3UCAjb1')
  }

}
