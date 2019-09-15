import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { OddsScreenComponent } from './components/odds-screen/odds-screen.component';
import { LogoutComponent } from './components/logout/logout.component';


const routes: Routes = [
    {path: '', component : LandingPageComponent},
    {path: 'login', component : LoginComponent},
    {path: ':name/odds', component : OddsScreenComponent},
    {path: 'logout', component: LogoutComponent},
    {path: '**', component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
