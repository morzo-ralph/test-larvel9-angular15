import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { ObservableModule } from 'rxjs';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    UserModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
