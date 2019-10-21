import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbdToastGlobalComponent } from './ngbd-toast-global.component';

describe('NgbdToastGlobalComponent', () => {
  let component: NgbdToastGlobalComponent;
  let fixture: ComponentFixture<NgbdToastGlobalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbdToastGlobalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbdToastGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
