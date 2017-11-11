import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TokohComponent } from './tokoh.component';

describe('TokohComponent', () => {
  let component: TokohComponent;
  let fixture: ComponentFixture<TokohComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TokohComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TokohComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
