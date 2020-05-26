import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { AdminNavigationComponent } from './admin-navigation/admin-navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlogadminComponent } from './blogadmin/blogadmin.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'navigation', component: NavbarComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'about', component: AboutComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/content', component: BlogDetailsComponent },
  { path: 'admin/nav', component: AdminNavigationComponent },
  { path: 'admin/dashboard', component: DashboardComponent },
  { path: 'admin/blog', component: BlogadminComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule { }
