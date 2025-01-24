import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes'; // Import your routing configuration
import { UpperCasePipe } from '@angular/common';
import { UppercasePipe } from './pipes/uppercase.pipe';

@NgModule({
  declarations: [
    AppComponent,UppercasePipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
