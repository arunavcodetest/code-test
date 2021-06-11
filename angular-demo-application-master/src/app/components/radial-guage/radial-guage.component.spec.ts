import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadialGuageComponent } from './radial-guage.component';

describe('RadialGuageComponent', () => {
  let component: RadialGuageComponent;
  let fixture: ComponentFixture<RadialGuageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadialGuageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadialGuageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
