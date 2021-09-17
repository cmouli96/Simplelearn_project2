import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { PlaceholderComponent } from '../components/placeholder/placeholder.component';
import { CheckoutComponent } from '../components/checkout/checkout.component';
import { CartItemsComponent } from '../components/cart-items/cart-items.component';
import { AdminComponent } from '../components/admin/admin.component';
import { UserComponent } from '../components/user/user.component';


const appRoutes:Routes=[
  {path:'home',component:HomeComponent},
  // {path:'home',component:HomeComponent,pathMatch:'prefix',children:[
  //   {path:'admin',component:AdminComponent},
  //   {path:'user',component:UserComponent}
  // ]},
  {path:'admin',component:AdminComponent},
    {path:'user',component:UserComponent},
  {path:'carts',component:CartItemsComponent},
  {path:'carts/checkout',component:CheckoutComponent},
  // {path:'products',component:ProductsComponent,pathMatch:'prefix',children:[
  //   {path:':productid',component:ProductDetailsComponent},
  //   {path:'',component:PlaceholderComponent}
  // ]},
  {path:'**',redirectTo:'/home',pathMatch:'full'}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
