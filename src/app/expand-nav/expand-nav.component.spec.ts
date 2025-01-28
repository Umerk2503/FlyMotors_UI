import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandNavComponent } from './expand-nav.component';

describe('ExpandNavComponent', () => {
  let component: ExpandNavComponent;
  let fixture: ComponentFixture<ExpandNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpandNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpandNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
