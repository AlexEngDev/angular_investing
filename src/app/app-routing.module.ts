import { NgModule } from '@angular/core';
import { ROUTES, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { CartComponent } from './cart/cart.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { NewsDetailsComponent } from './news/news-list/news-details/news-details.component';
import { NewsListComponent } from './news/news-list/news-list.component';
import { ShowOneNewsComponent } from './news/news-list/show-one-news/show-one-news.component';
import { authGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
  path: "home",
  component: HomeComponent,
  },
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: "news",
    component: NewsComponent,
  },
  {
    path: "news/:id",
    component: ShowOneNewsComponent
  },
  {
    path: "services",
    component: ServicesComponent,
  },
  {
    path: "cart",
    component: CartComponent,
  },
  {
    path: "start",
    component: GetStartedComponent, canActivate: [authGuard]
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
     path: '',   redirectTo: '/home', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
