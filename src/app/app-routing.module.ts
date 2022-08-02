import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationModuleModule } from './authentication-module/authentication-module.module';
import { LoginComponent } from './authentication-module/login/login.component';
import { AuthGardGuard } from './guards/auth-gard.guard';

const routes: Routes = [
  { path: 'panel', canActivate:[AuthGardGuard], loadChildren: () => import('./app-panel/app-panel.module').then(m => m.AppPanelModule) },
  {path:'' , component:LoginComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes) , AuthenticationModuleModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
