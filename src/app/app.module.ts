
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { SharedModule } from './shared/shared.module';
import { AngularFireModule } from '@angular/fire/';
import { environment } from '../environments/environment';
import { ServiceService } from './services/service.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGardGuard } from './guards/auth-gard.guard';
import { MainInterInterceptor } from './interceptor/main-inter.interceptor';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    SharedModule,
    HttpClientModule,
    // AngularFireModule.initializeApp(environment.firebase)

  ],

  providers: [  MatCardModule,
    MatInputModule,
    HttpClientModule,
        AuthGardGuard,
  ServiceService,
{
  provide: HTTP_INTERCEPTORS,
  useClass: MainInterInterceptor,
  multi: true
}],
  bootstrap: [AppComponent]
})
export class AppModule { }
