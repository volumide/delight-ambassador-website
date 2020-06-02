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

// firbase configurations
import { environment } from 'src/environments/environment';
// import {AngularFireModule} from '@angular/fire';
// import {AngularFirestoreModule} from '@angular/fire/firestore';
// import {AngularFireStorageModule} from '@angular/fire/storage';
import { AdminComponent } from './admin/admin.component'

import { QuillModule } from 'ngx-quill';
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

// export const counterReducer = createReducer(initialState,
//   on(increment, state => state + 1),
//   on(decrement, state => state - 1),
//   on(reset, state => 0),
// );

// export const ROOT_REDUCER = new InjectionToken<any>('Root Reducer');
export const ROOT_REDUCER = new InjectionToken<any>('Root Reducer');

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
  ],

  imports: [
    BrowserModule,
    // AngularFireModule.initializeApp(environment.config, 'delight-ambassador'),
    // AngularFirestoreModule,
    // AngularFireStorageModule,
    AppRoutingModule,
    FormsModule,
    QuillModule.forRoot({
      modules: {
        toolbar: [
          ['bold', 'italic', 'underline'],
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          ['link'],
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
          [{ 'script': 'sub'}, { 'script': 'super' }],
          [{ 'indent': '-1'}, { 'indent': '+1' }],
        ],
      },
    }),
    RouterModule,
    HttpClientModule
  ],

  providers: [{
    provide: ROOT_REDUCER, useValue: {

    }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
