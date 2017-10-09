import { Component, OnInit } from '@angular/core';
import { Country } from './country';
import { Dutyrate } from './dutyrate';
import { SearchParams } from './searchparams';
import { CountryService } from './country.service';
import { DutyrateService } from './dutyrate.service';

@Component({
  selector: 'my-dashboard',
  providers: [CountryService],
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {
  countries: Country[] = [];
  dutyrates: Dutyrate[] = [];
  searchParams: SearchParams = {
    to: '',
    from: '',
    term: ''
  };
  lastSearch: SearchParams = {
    to: '',
    from: '',
    term: ''
  };
  searchDone: boolean = false;

  constructor(
    private countryService: CountryService,
    private dutyrateService: DutyrateService,
  ) { }

  ngOnInit(): void {
    this.countryService.getCountries()
      .then(countries => this.countries = countries);
  }

  search(params: SearchParams): void {
    this.searchDone = false;
    this.lastSearch = Object.assign({}, params);
    this.dutyrateService.search(params)
      .then(
        dutyrates => {
        this.dutyrates = dutyrates;
        this.searchDone = true;
        })
  }

  customValidCheck(params: SearchParams): boolean {
    if (params == null)
      return true;
    if (params.to == params.from)
      return false;
    else if (params.to != "United States" && params.from != "United States")
      return false;
    return true;
  }
}
