import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spaten600Component } from './spaten600.component';

describe('Spaten600Component', () => {
  let component: Spaten600Component;
  let fixture: ComponentFixture<Spaten600Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Spaten600Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Spaten600Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
