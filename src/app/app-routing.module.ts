import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppShellComponent } from './app-shell/app-shell.component';

export const routes: Routes = [{
  path: 'app',
  component: AppShellComponent
},
{
  path: '',
  redirectTo: 'app',
  pathMatch: 'full'
},
{
  path: '**',
  redirectTo: 'app',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  // static components: any[] = [
  //   AppShellComponent
  // ];
 }
