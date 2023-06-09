import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { CartComponent } from './cart/cart.component';
import { GetStartedComponent } from './get-started/get-started.component';

const routes: Routes = [
  {
  path: "",
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
    path: "services",
    component: ServicesComponent,
  },
  {
    path: "cart",
    component: CartComponent,
  },
  {
    path: "start",
    component: GetStartedComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
