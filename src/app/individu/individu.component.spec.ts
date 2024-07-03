import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividuComponent } from './individu.component';

describe('IndividuComponent', () => {
  let component: IndividuComponent;
  let fixture: ComponentFixture<IndividuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndividuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndividuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
