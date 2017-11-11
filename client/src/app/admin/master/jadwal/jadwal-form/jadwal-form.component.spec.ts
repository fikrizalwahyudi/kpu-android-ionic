import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JadwalFormComponent } from './jadwal-form.component';

describe('JadwalFormComponent', () => {
  let component: JadwalFormComponent;
  let fixture: ComponentFixture<JadwalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JadwalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JadwalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
