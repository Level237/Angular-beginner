import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimaryComponent } from './primary/primary.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AppareilService } from './services/appareil.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AuthService } from './services/auth.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './services/auth-guard.service';

const routes:Routes=[
  {path:'appareils',canActivate:[AuthGuard], component:AppareilViewComponent},
  {path:'auth',component:AuthComponent},
  {path:'appareils/:id',canActivate:[AuthGuard],component:SingleAppareilComponent},
  {path:'',canActivate:[AuthGuard],component:AppareilViewComponent},
  {path:'notFound',component:NotFoundComponent},
  {path:'**',redirectTo:'/notFound'}
];
@NgModule({
  declarations: [
    AppComponent,
    PrimaryComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AppareilService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
