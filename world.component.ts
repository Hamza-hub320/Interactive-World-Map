import { Component, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-world',
  standalone: true,
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css'],
})
export class WorldComponent {
  countryData = {
    name: '',
    capital: '',
    region: '',
    incomeLevel: '',
    population: '',
    currency: '',
  };

  constructor(
    private http: HttpClient,
    private countryService: CountryService,
    private cdr: ChangeDetectorRef
  ) {}

  onSVGLoad(event: Event) {
    const svgDoc = (event.target as HTMLObjectElement).contentDocument;
    if (svgDoc) {
      const countries = svgDoc.querySelectorAll('path');
      countries.forEach((country) => {
        country.addEventListener('mouseover', this.onMouseOver.bind(this));
        country.addEventListener('mouseout', this.onMouseOut.bind(this));
      });
    }
  }

  onMouseOver(event: MouseEvent) {
    const target = event.target as SVGElement;
    if (target && target.id) {
      target.style.fill = 'lightblue';
      this.fetchCountryData(target.id);
    }
  }

  onMouseOut(event: MouseEvent) {
    const target = event.target as SVGElement;
    if (target) {
      target.style.fill = '';
    }
  }

  fetchCountryData(countryCode: string) {
    this.countryService.getCountryInfo(countryCode).subscribe(
      (data: any) => {
        if (data && data[1] && data[1][0]) {
          const countryInfo = data[1][0];
          this.countryData = {
            name: countryInfo.name,
            capital: countryInfo.capitalCity,
            region: countryInfo.region.value,
            incomeLevel: countryInfo.incomeLevel.value,
            population: 'N/A',
            currency: 'Not Available',
          };
          this.cdr.detectChanges();
        }
      },
      (error: any) => {
        console.error('Error fetching country data:', error);
      }
    );
  }
}
