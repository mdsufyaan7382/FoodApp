import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { ViewItemsComponent } from './view-items/view-items.component';
import { AdditemComponent } from './additem/additem.component';
import { UpdateitemComponent } from './updateitem/updateitem.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AdminLoginHomePageComponent } from './admin-login-home-page/admin-login-home-page.component';
import { ShowUserMenuItemsComponent } from './show-user-menu-items/show-user-menu-items.component';
import { UserLoginHomePageComponent } from './user-login-home-page/user-login-home-page.component';
import { CartComponent } from './cart/cart.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ViewUserComponent } from './view-user/view-user.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewItemsComponent,
    AdditemComponent,
    UpdateitemComponent,
    AdminComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AdminLoginHomePageComponent,
    ShowUserMenuItemsComponent,
    UserLoginHomePageComponent,
    CartComponent,
    UpdateProfileComponent,
    UpdateUserComponent,
    ViewUserComponent
  ],
  imports: [BrowserModule,AppRoutingModule,FormsModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
