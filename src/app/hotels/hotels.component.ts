import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {

  headers = [
    {label: 'Hotel Name', value: 'hotelName'},
    {label: 'ratings', value: 'ratings'},
    {label: 'address', value: 'address'},
  ];

  data = [
    {hotelName: 'Mariott', ratings: 5, address: 'bangalore'},
    {hotelName: 'Mariott', ratings: 5, address: 'bangalore'},
    {hotelName: 'Mariott', ratings: 5, address: 'bangalore'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
