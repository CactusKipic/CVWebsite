import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetsTechniquesComponent } from './projets-techniques.component';

describe('ProjetsTechniquesComponent', () => {
  let component: ProjetsTechniquesComponent;
  let fixture: ComponentFixture<ProjetsTechniquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetsTechniquesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetsTechniquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
