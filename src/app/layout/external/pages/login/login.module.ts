import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AddonPipe } from '../../../../pipes/addon.pipe';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    AddonPipe,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: LoginComponent },
  ]),
  ]
})
export class LoginModule { }
