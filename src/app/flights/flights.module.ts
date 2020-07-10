import {EventEmitter, NgModule, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlightsComponent} from './flights.component';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path: '', component: FlightsComponent}
]

@NgModule({
  declarations: [
    FlightsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

  ]
})
export class FlightsModule { }
