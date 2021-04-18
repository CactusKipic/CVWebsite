import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetsPersosComponent } from './projets-persos.component';

describe('ProjetsPersosComponent', () => {
  let component: ProjetsPersosComponent;
  let fixture: ComponentFixture<ProjetsPersosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetsPersosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetsPersosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
