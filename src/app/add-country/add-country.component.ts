import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from '../country';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.css']
})
export class AddCountryComponent implements OnInit {

  country: Country = new Country();

  constructor(private countryService: CountryService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveCountry(){
    this.countryService.addCountry(this.country).subscribe( data =>{
      console.log(data);
      this.goToCountryList();
    },
    error => console.log(error));
  }

  goToCountryList(){
    this.router.navigate(['/country']);
  }

  onSubmit(){
    console.log(this.country);
    this.saveCountry();
  }

}
