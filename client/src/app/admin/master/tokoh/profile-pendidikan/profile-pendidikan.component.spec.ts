import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePendidikanComponent } from './profile-pendidikan.component';

describe('ProfilePendidikanComponent', () => {
  let component: ProfilePendidikanComponent;
  let fixture: ComponentFixture<ProfilePendidikanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePendidikanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePendidikanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
