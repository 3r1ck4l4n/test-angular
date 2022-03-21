import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwittGridComponent } from './twitt-grid.component';

describe('TwittGridComponent', () => {
  let component: TwittGridComponent;
  let fixture: ComponentFixture<TwittGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwittGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwittGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
