import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CoursesComponent} from "./courses/courses.component";
import {ShopComponent} from "./shop/shop.component";
import {AboutComponent} from "./about/about.component";
import {BlogComponent} from "./blog/blog.component";
import {ContactComponent} from "./contact/contact.component";
import {AddToCartComponent} from "./add-to-cart/add-to-cart.component";
import {LogRegComponent} from "./log-reg/log-reg.component";

const routes: Routes = [
  {path : '',component: HomeComponent},
  {path : 'courses', component: CoursesComponent},
  {path : "shop", component: ShopComponent},
  {path : 'about', component: AboutComponent},
  {path : 'blog', component:BlogComponent},
  {path : 'contact' , component: ContactComponent},
  {path :'addto', component:AddToCartComponent},
  {path :'logReg', component:LogRegComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
