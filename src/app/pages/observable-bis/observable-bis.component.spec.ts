import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableBisComponent } from './observable-bis.component';

describe('ObservableBisComponent', () => {
  let component: ObservableBisComponent;
  let fixture: ComponentFixture<ObservableBisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservableBisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableBisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
