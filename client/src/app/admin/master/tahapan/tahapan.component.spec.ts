import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TahapanComponent } from './tahapan.component';

describe('TahapanComponent', () => {
  let component: TahapanComponent;
  let fixture: ComponentFixture<TahapanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TahapanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TahapanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
