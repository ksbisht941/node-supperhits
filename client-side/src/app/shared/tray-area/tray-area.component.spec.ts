import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrayAreaComponent } from './tray-area.component';

describe('TrayAreaComponent', () => {
  let component: TrayAreaComponent;
  let fixture: ComponentFixture<TrayAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrayAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrayAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
