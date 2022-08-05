import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbjectsComponent } from './abjects.component';

describe('AbjectsComponent', () => {
  let component: AbjectsComponent;
  let fixture: ComponentFixture<AbjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
