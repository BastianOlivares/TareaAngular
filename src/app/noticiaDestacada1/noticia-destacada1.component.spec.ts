import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaDestacada1Component } from './noticia-destacada1.component';

describe('NoticiaDestacada1Component', () => {
  let component: NoticiaDestacada1Component;
  let fixture: ComponentFixture<NoticiaDestacada1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiaDestacada1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiaDestacada1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
