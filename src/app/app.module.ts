import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AppShellComponent } from './app-shell/app-shell.component';
import { LibSharedModule } from 'lib-shared';

@NgModule({
  declarations: [
    AppComponent,
    AppShellComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    LibSharedModule,
    RouterModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  exports: [LibSharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
