import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveCoinComponent } from './live-coin.component';

describe('LiveCoinComponent', () => {
  let component: LiveCoinComponent;
  let fixture: ComponentFixture<LiveCoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveCoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
