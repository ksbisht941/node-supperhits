import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MastheadAreaComponent } from './masthead-area.component';

describe('MastheadAreaComponent', () => {
  let component: MastheadAreaComponent;
  let fixture: ComponentFixture<MastheadAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MastheadAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MastheadAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
