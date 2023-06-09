import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { NewsComponent } from './news/news.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { GetStartedComponent } from './get-started/get-started.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ServicesComponent,
    NewsComponent,
    AboutComponent,
    CartComponent,
    GetStartedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
