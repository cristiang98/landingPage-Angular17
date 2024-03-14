import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path:'products', component: ProductsComponent},
    {path:'products/:id', component: ProductDetailComponent},
    {path: 'contact', component: ContactComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'} // Redirecciona a la ruta principal si no encuentra la ruta y el pathMatch: 'full' es para que redireccione solo si la ruta es exacta
];
