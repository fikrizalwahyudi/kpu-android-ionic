import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaslonFormComponent } from './paslon-form.component';

describe('PaslonFormComponent', () => {
  let component: PaslonFormComponent;
  let fixture: ComponentFixture<PaslonFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaslonFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaslonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
