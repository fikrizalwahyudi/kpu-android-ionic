import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaslonComponent } from './paslon.component';

describe('PaslonComponent', () => {
  let component: PaslonComponent;
  let fixture: ComponentFixture<PaslonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaslonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaslonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
