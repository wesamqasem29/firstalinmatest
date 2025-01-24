import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from "../../componenets/navbar/navbar.component";
import { FooterComponent } from "../../componenets/footer/footer.component";
import { AccountcardComponent } from '../../componenets/accountcard/accountcard.component';
import { CardboxComponent } from '../../componenets/cardbox/cardbox.component';
import { BillslistComponent } from '../../componenets/billslist/billslist.component';
import { AuthGuard } from '../../../../guards/auth.guard';
import { ViewnotificationComponent } from '../viewnotification/viewnotification.component';
import { PayrollComponent } from '../payroll/payroll.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UppercasePipe } from '../../../../pipes/uppercase.pipe';
import { HighPipe } from '../../../../pipes/high.pipe';

@NgModule({
  declarations: [DashboardComponent,AccountcardComponent,CardboxComponent,BillslistComponent,NavbarComponent,ViewnotificationComponent,PayrollComponent],
  imports: [
    CommonModule,
    HighPipe,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([
        { path: '', component: DashboardComponent , canActivate: [AuthGuard]},
        { path: 'notification', component: ViewnotificationComponent , canActivate: [AuthGuard]},
        { path: 'payroll', component: PayrollComponent , canActivate: [AuthGuard]},

    ]),
    FooterComponent
],
})

export class DashboardModule {}