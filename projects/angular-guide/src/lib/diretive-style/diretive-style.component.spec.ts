import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretiveStyleComponent } from './diretive-style.component';

describe('DiretiveStyleComponent', () => {
  let component: DiretiveStyleComponent;
  let fixture: ComponentFixture<DiretiveStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretiveStyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretiveStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
