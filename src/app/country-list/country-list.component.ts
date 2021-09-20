import { Component, OnInit } from '@angular/core';
import { Country } from '../country';
import { CountryService } from '../country.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
//import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  countryL? : Country[];

  public displayedColumns = ['countryCode', 'countryName', 'countryDesc', 'update', 'delete'];
  dataSource = new MatTableDataSource<Country>();

  constructor( private countryservice: CountryService, 
    private router: Router) {  }

  ngOnInit(): void {
    this.getCountry();
    
  }

  private getCountry(){
    this.countryservice.getCountryList().subscribe(data => {
      this.countryL=data;
      this.dataSource.data = this.countryL;
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
