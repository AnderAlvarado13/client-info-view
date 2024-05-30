import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaResumenComponent } from './pantalla-resumen.component';

describe('PantallaResumenComponent', () => {
  let component: PantallaResumenComponent;
  let fixture: ComponentFixture<PantallaResumenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantallaResumenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PantallaResumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
