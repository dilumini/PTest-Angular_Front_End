import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from './country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private baseURL = "http://localhost:8080/rest/v2/country";
  constructor(private http:HttpClient) { }


  getCountryList(): Observable<Country[]> {
    return this.http.get<Country[]>(this.baseURL);
  }

  addCountry(country: Country): Observable<Object>{
    return this.http.post(`${this.baseURL}`, country);
  }
}
