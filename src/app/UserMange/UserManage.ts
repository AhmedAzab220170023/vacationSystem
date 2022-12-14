import { UserDataService } from './../Core/Services/UserData';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserNewComponent } from './user-new/user-new.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewControlService } from '../Core/Services/ViewControl';




const routes: Routes = [
  { path: 'user-new', component: UserNewComponent },
  { path: 'user-info', component: UserInfoComponent },
  { path: 'home', component: UserLoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },

];


@NgModule({
  declarations: [
    UserNewComponent,
    UserLoginComponent,
    UserInfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)

  ],
  exports: [RouterModule],

  providers: [UserDataService, ViewControlService]  // determine injector (DI token)
})

export class UserManageModule { }
