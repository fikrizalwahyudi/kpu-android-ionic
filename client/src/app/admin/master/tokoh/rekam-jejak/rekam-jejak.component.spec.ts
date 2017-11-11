import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RekamJejakComponent } from './rekam-jejak.component';

describe('RekamJejakComponent', () => {
  let component: RekamJejakComponent;
  let fixture: ComponentFixture<RekamJejakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RekamJejakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RekamJejakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
