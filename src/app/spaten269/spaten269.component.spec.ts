import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spaten269Component } from './spaten269.component';

describe('Spaten269Component', () => {
  let component: Spaten269Component;
  let fixture: ComponentFixture<Spaten269Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Spaten269Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Spaten269Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
