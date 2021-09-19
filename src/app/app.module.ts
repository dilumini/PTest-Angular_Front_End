import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CountryListComponent } from './country-list/country-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddCountryComponent } from './add-country/add-country.component';
import { FormsModule} from '@angular/forms';
import { UpdateCountryComponent } from './update-country/update-country.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryListComponent,
    AddCountryComponent,
    UpdateCountryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
