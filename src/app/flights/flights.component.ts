import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlightsComponent implements OnInit {

  @Input() headers = [
    {label: 'name', value: 'name'},
    {label: 'number', value: 'number'},
    {label: 'details', value: 'details'},
    {label: 'Airline Details', value: 'airlineDetails'},
  ];
  @Input() data = [
    {id: 1, name: 'Indigo', number: 'irc ', details: 'test', airlineDetails: 'test' },
    {name: 'Air India', number: 'irc 543 ', details: 'test', airlineDetails: 'test' },
    {name: 'Vistara', number: 'irc 987 ', details: 'test', airlineDetails: 'test' },
    {name: 'Indigo', number: 'irc 765', details: 'test', airlineDetails: 'test' },
  ]
  constructor(
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.cdr.markForCheck();
  }

}
