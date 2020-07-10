import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  cities: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  constructor(
    private http: HttpClient
  ) {
    this.get().subscribe((res: string[]) =>  this.cities.next(res));
  }

  private get() {
    return this.http.get('assets/cities.json');
  }

  getCities() {
    return this.cities;
  }
}
