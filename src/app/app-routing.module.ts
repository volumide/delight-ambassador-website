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
import { EventadminComponent } from './eventadmin/eventadmin.component';
import { GallaryadminComponent } from './gallaryadmin/gallaryadmin.component';
import { LeadersadminComponent } from './leadersadmin/leadersadmin.component';
import { GuildlinesComponent } from './guildlines/guildlines.component';
import { EventsComponent } from './events/events.component';
import { UnitsComponent } from './units/units.component';


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
  { path: 'admin/event', component: EventadminComponent },
  { path: 'admin/gallery', component: GallaryadminComponent },
  { path: 'admin/profile', component: LeadersadminComponent },
  { path: 'guild', component: GuildlinesComponent },
  { path: 'events', component: EventsComponent },
  { path: 'teams', component: UnitsComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule { }
