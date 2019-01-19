import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyAddressComponent } from './my-address/my-address.component';

import { NgxsResetPluginModule } from '../reset/reset.module';

//ngxs 
import { NgxsModule } from '@ngxs/store';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { MyAddressState } from './store/states/my-address.state';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MyAddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule, NgxsResetPluginModule.forRoot(),
    NgxsModule.forRoot([MyAddressState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsFormPluginModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
