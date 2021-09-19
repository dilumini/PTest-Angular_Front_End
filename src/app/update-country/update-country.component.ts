import { Component, OnInit } from '@angular/core';
import { Country } from '../country';
import { CountryService } from '../country.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-update-country',
  templateUrl: './update-country.component.html',
  styleUrls: ['./update-country.component.css']
})
export class UpdateCountryComponent implements OnInit {

  countryId: any;
  country: Country = new Country();

  constructor(private countryService: CountryService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.countryId = this.route.snapshot.params['countryId'];

    this.countryService.getCountryById(this.countryId).subscribe(data => {
      this.country = data;
    }, error => console.log(error));
  }
  onSubmit(){
    this.countryService.updateCountry(this.countryId, this.country).subscribe( data =>{
      this.goToEmployeeList();
    }
    , error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/country']);
  }
  

}
