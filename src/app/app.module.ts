import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ProcheService } from './services/procheService';

import { Camera } from '@ionic-native/camera/ngx';
import { ReactiveFormsModule } from '@angular/forms';
// import { IonicStepperModule } from 'ionic-stepper';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, BrowserAnimationsModule, HttpClientModule, ReactiveFormsModule
    // IonicStepperModule],
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, Camera, 
    // ProcheService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
