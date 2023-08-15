import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLoginHomePageComponent } from './admin-login-home-page.component';

describe('AdminLoginHomePageComponent', () => {
  let component: AdminLoginHomePageComponent;
  let fixture: ComponentFixture<AdminLoginHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLoginHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminLoginHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
