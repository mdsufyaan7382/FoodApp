import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginComponent } from './login.component';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule ,FormsModule
      ],
      declarations: [ LoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('username and password validation for required field', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const usernameElement: HTMLInputElement = fixture.debugElement.query(By.css('#username')).nativeElement;
      //const usernameElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#username');
      // const passwordElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#password');
      // const genderElement: HTMLSelectElement = fixture.debugElement.nativeElement.querySelector('#gender');

      usernameElement.dispatchEvent(new Event('focus'));
      usernameElement.dispatchEvent(new Event('blur'));

      // passwordElement.dispatchEvent(new Event('focus'));
      // passwordElement.dispatchEvent(new Event('blur'));

      // genderElement.dispatchEvent(new Event('focus'));
      // genderElement.dispatchEvent(new Event('blur'));

      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const usernameErrors: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#usernameErrors');
        // const passwordErrors: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#passwordErrors');
        // const genderErrors: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#genderErrors');
           const submitButton: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#submitButton');
        
        expect(usernameErrors.children.length).toEqual(1);
        expect(usernameErrors.children[0].innerHTML).toEqual('This field required');

        // expect(passwordErrors.children.length).toEqual(1);
        // expect(passwordErrors.children[0].innerHTML).toEqual('This field required');

        // expect(genderErrors.children.length).toEqual(1);
        // expect(genderErrors.children[0].innerHTML).toEqual('This field required');

        expect(submitButton.disabled).toBeTruthy();
      })
    })
  });
});
