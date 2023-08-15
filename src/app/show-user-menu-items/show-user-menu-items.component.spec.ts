import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUserMenuItemsComponent } from './show-user-menu-items.component';

describe('ShowUserMenuItemsComponent', () => {
  let component: ShowUserMenuItemsComponent;
  let fixture: ComponentFixture<ShowUserMenuItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowUserMenuItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowUserMenuItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
