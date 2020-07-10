import {Component, OnInit} from '@angular/core';
import {CitiesService} from '../cities.service';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss']
})
export class AutoCompleteComponent implements OnInit {

  cities = [];
  filteredCities = [];

  constructor(
    // private citiesService: CitiesService
  ) {
  }

  ngOnInit(): void {
    // this.citiesService.getCities().subscribe((res: string[]) => {
    //   console.log(res);
    //   this.cities = [...res];
    // });
  }

  onSearch(val) {
    if (!val.trim()) {
      this.filteredCities = [];
      return;
    }
    this.filteredCities = this.cities.filter((res: string) => res.toLowerCase().startsWith(val.toLowerCase()));

  }
}
