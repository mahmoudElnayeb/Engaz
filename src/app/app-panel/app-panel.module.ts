import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppPanelRoutingModule } from './app-panel-routing.module';
import { AppPanelComponent } from './app-panel.component';
import { AuthGardGuard } from '../guards/auth-gard.guard';


@NgModule({
  declarations: [AppPanelComponent],
  imports: [
    CommonModule,
    AppPanelRoutingModule,
    SharedModule,RouterModule,

  ],
  // providers:[AuthGardGuard]
})
export class AppPanelModule { }
