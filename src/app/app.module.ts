import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user-details-page/user/user.component';
import { DynamicAddressComponent } from './user-details-page/dynamic-address/dynamic-address.component';
import { UserDetailsPageComponent } from './user-details-page/user-details-page.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DynamicAddressComponent,
    UserDetailsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
