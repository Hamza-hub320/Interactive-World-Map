import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl = 'https://api.worldbank.org/v2/country';

  constructor(private http: HttpClient) {}

  getCountryInfo(countryCode: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${countryCode}?format=json`);
  }
}
