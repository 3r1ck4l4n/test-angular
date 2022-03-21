import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwittDescriptionComponent } from './twitt-description.component';

describe('TwittDescriptionComponent', () => {
  let component: TwittDescriptionComponent;
  let fixture: ComponentFixture<TwittDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwittDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwittDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
