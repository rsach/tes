import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import {By} from '@angular/platform-browser';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    component.headers = [{label: 'Name', value: 'name'}];
    component.data = [{name: 'Air India'}];
    fixture.detectChanges();
  });

  it('should create', () => {
    const td = fixture.debugElement.query(By.css('td'));

    expect(td.nativeElement.innerText).toBe('Air India');
  });
});
