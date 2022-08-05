import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsectsnComponent } from './obsectsn.component';

describe('ObsectsnComponent', () => {
  let component: ObsectsnComponent;
  let fixture: ComponentFixture<ObsectsnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObsectsnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObsectsnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
