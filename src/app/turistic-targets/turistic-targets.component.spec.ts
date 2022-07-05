import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuristicTargetsComponent } from './turistic-targets.component';

describe('TuristicTargetsComponent', () => {
  let component: TuristicTargetsComponent;
  let fixture: ComponentFixture<TuristicTargetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuristicTargetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TuristicTargetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
