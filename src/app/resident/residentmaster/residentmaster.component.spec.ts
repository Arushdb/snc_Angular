import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentmasterComponent } from './residentmaster.component';

describe('ResidentmasterComponent', () => {
  let component: ResidentmasterComponent;
  let fixture: ComponentFixture<ResidentmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResidentmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
