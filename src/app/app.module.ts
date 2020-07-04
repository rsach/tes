import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DatePickerComponent} from './date-picker/date-picker.component';
import {ExpansionPanelComponent} from './expansion-panel/expansion-panel.component';
import {ButtonComponent} from './button/button.component';
import {PaginatorComponent} from './paginator/paginator.component';
import {AutoCompleteComponent} from './auto-complete/auto-complete.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatNativeDateModule} from '@angular/material/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DatePickerComponent,
    ExpansionPanelComponent,
    ButtonComponent,
    PaginatorComponent,
    AutoCompleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatButtonModule,
    MatInputModule,
    MatPaginatorModule,
    MatNativeDateModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
