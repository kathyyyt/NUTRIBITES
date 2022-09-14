import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'index-home',
    loadChildren: () => import('./pages/index-home/index-home.module').then( m => m.IndexHomePageModule)
  },
  {
    path: '',
    redirectTo: 'index-home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./pages/products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./pages/cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'index-products',
    loadChildren: () => import('./pages/index-products/index-products.module').then( m => m.IndexProductsPageModule)
  },
  {
    path: 'index-contact',
    loadChildren: () => import('./pages/index-contact/index-contact.module').then( m => m.IndexContactPageModule)
  },
  {
    path: 'index-about',
    loadChildren: () => import('./pages/index-about/index-about.module').then( m => m.IndexAboutPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'place-order',
    loadChildren: () => import('./pages/place-order/place-order.module').then( m => m.PlaceOrderPageModule)
  },
  {
    path: 'nutripay',
    loadChildren: () => import('./pages/nutripay/nutripay.module').then( m => m.NutripayPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./pages/checkout/checkout.module').then( m => m.CheckoutPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
