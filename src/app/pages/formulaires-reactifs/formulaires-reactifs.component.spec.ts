import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulairesReactifsComponent } from './formulaires-reactifs.component';

describe('FormulairesReactifsComponent', () => {
  let component: FormulairesReactifsComponent;
  let fixture: ComponentFixture<FormulairesReactifsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulairesReactifsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulairesReactifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
