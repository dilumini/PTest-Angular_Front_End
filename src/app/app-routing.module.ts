import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCountryComponent } from './add-country/add-country.component';
import { CountryListComponent } from './country-list/country-list.component';
import { UpdateCountryComponent } from './update-country/update-country.component';

const routes: Routes = [
  {path: "country", component:CountryListComponent},
  {path :"add-country", component:AddCountryComponent},
  {path : "update-country/:countryId", component:UpdateCountryComponent},
  {path: '', redirectTo: 'country', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
