import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateComponentsComponent } from './update-components.component';

describe('UpdateComponentsComponent', () => {
  let component: UpdateComponentsComponent;
  let fixture: ComponentFixture<UpdateComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
