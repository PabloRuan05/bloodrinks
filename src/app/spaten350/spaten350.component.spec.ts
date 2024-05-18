import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spaten350Component } from './spaten350.component';

describe('Spaten350Component', () => {
  let component: Spaten350Component;
  let fixture: ComponentFixture<Spaten350Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Spaten350Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Spaten350Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
