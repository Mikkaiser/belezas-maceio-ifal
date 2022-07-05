import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CraftworkComponent } from './craftwork.component';

describe('CraftworkComponent', () => {
  let component: CraftworkComponent;
  let fixture: ComponentFixture<CraftworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CraftworkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CraftworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
