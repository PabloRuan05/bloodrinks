import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spaten355Component } from './spaten355.component';

describe('Spaten355Component', () => {
  let component: Spaten355Component;
  let fixture: ComponentFixture<Spaten355Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Spaten355Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Spaten355Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
