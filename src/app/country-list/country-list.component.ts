import { Component, OnInit } from '@angular/core';
import { Country } from '../country';
import { CountryService } from '../country.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  countryL? : Country[];

  constructor( private countryservice: CountryService, 
    private router: Router) {  }

  ngOnInit(): void {
    this.getCountry();
    
  }

  private getCountry(){
    this.countryservice.getCountryList().subscribe(data => {
      this.countryL=data;
    })
  }

  updateCountry(countryId: any){
    this.router.navigate(['update-country',countryId]);
  }

  deleteCountry(countryId: any){
    this.countryservice.deleteCountry(countryId).subscribe( data => {
      console.log(data);
      this.getCountry();
    })
  }

}
