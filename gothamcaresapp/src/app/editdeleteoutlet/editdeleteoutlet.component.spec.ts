import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdeleteoutletComponent } from './editdeleteoutlet.component';

describe('EditdeleteoutletComponent', () => {
  let component: EditdeleteoutletComponent;
  let fixture: ComponentFixture<EditdeleteoutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditdeleteoutletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditdeleteoutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
