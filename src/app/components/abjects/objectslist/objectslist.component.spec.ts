import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectslistComponent } from './objectslist.component';

describe('ObjectslistComponent', () => {
  let component: ObjectslistComponent;
  let fixture: ComponentFixture<ObjectslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjectslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
