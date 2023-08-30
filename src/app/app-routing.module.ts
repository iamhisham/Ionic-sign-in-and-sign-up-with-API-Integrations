import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SignupOrLoginComponent } from './signup-or-login/signup-or-login.component';

const routes: Routes = [
  {
    path: 'signup-login',
    component: SignupOrLoginComponent
  },
  {
    path: '',
    redirectTo: 'signup-login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
