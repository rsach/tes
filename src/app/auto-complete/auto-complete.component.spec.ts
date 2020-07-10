import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AutoCompleteComponent} from './auto-complete.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {CitiesService} from '../cities.service';

describe('AutoCompleteComponent', () => {
  let component: AutoCompleteComponent;
  let fixture: ComponentFixture<AutoCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AutoCompleteComponent],
      imports: [HttpClientTestingModule],
      providers: [CitiesService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
