import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcervejasComponent } from './listcervejas.component';

describe('ListcervejasComponent', () => {
  let component: ListcervejasComponent;
  let fixture: ComponentFixture<ListcervejasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListcervejasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListcervejasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
