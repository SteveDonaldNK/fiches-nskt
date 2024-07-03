import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrogueComponent } from './drogue.component';

describe('DrogueComponent', () => {
  let component: DrogueComponent;
  let fixture: ComponentFixture<DrogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrogueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
