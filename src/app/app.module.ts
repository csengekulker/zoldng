import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './home/contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { BookingComponent } from './booking/booking.component';
import { ServicesComponent } from './services/services.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FeatureComponent } from './home/feature/feature.component';
import { IconsComponent } from './home/icons/icons.component';
import { NavigationComponent } from './nav/navbar.component';
import { HeaderComponent } from './home/header/header.component';
import { InfoComponent } from './info/info.component';
import { FaqComponent } from './info/faq/faq.component';
import { PricelistComponent } from './info/pricelist/pricelist.component';
import { DocsComponent } from './info/docs/docs.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ButtonComponent } from './info/button/button.component';
import { BookingInfoComponent } from './booking/info/info.component';
import { FormComponent } from './booking/form/form.component';
import { CommonModule } from '@angular/common';
import { LicenseComponent } from './info/license/license.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    FooterComponent,
    BookingComponent,
    BookingInfoComponent,
    ServicesComponent,
    GalleryComponent,
    FeatureComponent,
    IconsComponent,
    NavigationComponent,
    HeaderComponent,
    InfoComponent,
    FaqComponent,
    PricelistComponent,
    DocsComponent,
    NotfoundComponent,
    ButtonComponent,
    FormComponent,
    LicenseComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
