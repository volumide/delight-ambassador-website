import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { AdminComponent } from './admin/admin.component'

import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { BlogadminComponent } from './blogadmin/blogadmin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventadminComponent } from './eventadmin/eventadmin.component';
import { LeadersadminComponent } from './leadersadmin/leadersadmin.component';
import { AdminNavigationComponent } from './admin-navigation/admin-navigation.component';
import { GallaryadminComponent } from './gallaryadmin/gallaryadmin.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ImagecardComponent } from './imagecard/imagecard.component';
import {QuillModule} from 'ngx-quill';
import { EventsComponent } from './events/events.component';
import { GuildlinesComponent } from './guildlines/guildlines.component';
import { UnitsComponent } from './units/units.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    GalleryComponent,
    BlogComponent,
    BlogDetailsComponent,
    AdminComponent,
    CardComponent,
    BlogadminComponent,
    DashboardComponent,
    EventadminComponent,
    LeadersadminComponent,
    AdminNavigationComponent,
    GallaryadminComponent,
    ImagecardComponent,
    EventsComponent,
    GuildlinesComponent,
    UnitsComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    QuillModule.forRoot()
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
