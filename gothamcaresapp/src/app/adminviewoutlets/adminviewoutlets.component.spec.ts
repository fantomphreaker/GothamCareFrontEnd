import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewoutletsComponent } from './adminviewoutlets.component';

describe('AdminviewoutletsComponent', () => {
  let component: AdminviewoutletsComponent;
  let fixture: ComponentFixture<AdminviewoutletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminviewoutletsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminviewoutletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
