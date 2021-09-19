import { Component, OnInit } from '@angular/core';
import { Country } from '../country';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  countryL? : Country[];

  constructor( private countryservice: CountryService) {  }

  ngOnInit(): void {
    this.getCountry();
    
  }

  private getCountry(){
    this.countryservice.getCountryList().subscribe(data => {
      this.countryL=data;
    })
  }

}
