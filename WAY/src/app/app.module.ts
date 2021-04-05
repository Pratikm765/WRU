import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {
     path:'login',component: LoginFormComponent,
  },
  {
    path:'home',component: HomepageComponent,
  },
  {
    path:'',redirectTo:'/login',pathMatch:'full'
  }
]
@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    BsDropdownModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
