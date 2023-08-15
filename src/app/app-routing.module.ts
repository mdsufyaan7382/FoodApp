import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditemComponent } from './additem/additem.component';
import { AdminLoginHomePageComponent } from './admin-login-home-page/admin-login-home-page.component';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShowUserMenuItemsComponent } from './show-user-menu-items/show-user-menu-items.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UpdateitemComponent } from './updateitem/updateitem.component';
import { UserLoginHomePageComponent } from './user-login-home-page/user-login-home-page.component';
import { ViewItemsComponent } from './view-items/view-items.component';
import { ViewUserComponent } from './view-user/view-user.component';

const routes: Routes = [
  { path: 'home',component:HomeComponent},
  { path: 'view',component:ViewItemsComponent},
  { path: 'add',component:AdditemComponent},
  // { path: 'update',component:UpdateitemComponent}
  { path: 'update/:id', component: UpdateitemComponent },
  { path: '',component:HomeComponent},
  { path: 'admin',component:AdminComponent},
  { path: 'adminLoginHomePage',component:AdminLoginHomePageComponent},
  { path: 'userLoginHomePage',component:UserLoginHomePageComponent},
  { path: 'login',component:LoginComponent},
  { path: 'register',component:RegisterComponent},
  { path: 'viewUser',component:ViewUserComponent},
  { path: 'updateUser/:id', component: UpdateUserComponent},
  { path: 'showUserMenuItems', component:ShowUserMenuItemsComponent},
  { path: 'cartview', component:CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
