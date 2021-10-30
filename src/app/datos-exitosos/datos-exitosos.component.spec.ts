import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosExitososComponent } from './datos-exitosos.component';

describe('DatosExitososComponent', () => {
  let component: DatosExitososComponent;
  let fixture: ComponentFixture<DatosExitososComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosExitososComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosExitososComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
