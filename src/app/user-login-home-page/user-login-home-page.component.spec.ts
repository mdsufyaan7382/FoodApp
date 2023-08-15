import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoginHomePageComponent } from './user-login-home-page.component';

describe('UserLoginHomePageComponent', () => {
  let component: UserLoginHomePageComponent;
  let fixture: ComponentFixture<UserLoginHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLoginHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLoginHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
