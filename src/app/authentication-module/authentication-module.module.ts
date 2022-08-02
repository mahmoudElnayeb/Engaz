import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import{FormsModule,ReactiveFormsModule} from'@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { ServiceService } from '../services/service.service';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/';
import { environment } from 'src/environments/environment';
// import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { RouterModule } from '@angular/router';
import { AuthGardGuard } from '../guards/auth-gard.guard';
@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase)

  ],
  exports:[LoginComponent],
  providers: [
    ServiceService,
    HttpClientModule,
    AngularFireAuthModule,
    RouterModule,
    // AuthGardGuard,
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ]
})
export class AuthenticationModuleModule { }
