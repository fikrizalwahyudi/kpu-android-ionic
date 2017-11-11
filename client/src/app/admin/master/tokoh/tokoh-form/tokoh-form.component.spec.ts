import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TokohFormComponent } from './tokoh-form.component';

describe('TokohFormComponent', () => {
  let component: TokohFormComponent;
  let fixture: ComponentFixture<TokohFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TokohFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TokohFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
