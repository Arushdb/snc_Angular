import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentdetailComponent } from './residentdetail.component';

describe('ResidentdetailComponent', () => {
  let component: ResidentdetailComponent;
  let fixture: ComponentFixture<ResidentdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResidentdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
