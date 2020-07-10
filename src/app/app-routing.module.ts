import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DatePickerComponent} from './date-picker/date-picker.component';
import {ExpansionPanelComponent} from './expansion-panel/expansion-panel.component';
import {ButtonComponent} from './button/button.component';
import {PaginatorComponent} from './paginator/paginator.component';
import {AutoCompleteComponent} from './auto-complete/auto-complete.component';
import {FlightsComponent} from './flights/flights.component';
import {HotelsComponent} from './hotels/hotels.component';


const routes: Routes = [
  {path: '', redirectTo: 'datepicker', pathMatch: 'full'},
  {path: 'datepicker', component: DatePickerComponent},
  {path: 'expansionPanel', component: ExpansionPanelComponent},
  {path: 'button', component: ButtonComponent},
  {path: 'paginator', component: PaginatorComponent},
  {path: 'autoComplete', component: AutoCompleteComponent},
  {path: 'flights', loadChildren: () => import('./flights/flights.module').then(res => res.FlightsModule)},
  {path: 'hotels', component: HotelsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
