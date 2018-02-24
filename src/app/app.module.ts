import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { VacancyListPage } from '../pages/vacancy-list/vacancy-list';
import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GeocoderProvider } from './providers/geocoder';
import { Geolocation } from '@ionic-native/geolocation';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { GalleryProvider } from './providers/gallery';
import { Camera } from '@ionic-native/camera';
import { VancancyPage } from '../pages/vacancy/vancancy';

@NgModule({
  declarations: [
    MyApp,
    VacancyListPage,
    ContactPage,
    RegisterPage,
    LoginPage,
    VancancyPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    VacancyListPage,
    ContactPage,
    RegisterPage,
    LoginPage,
    VancancyPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    GeocoderProvider,
    GalleryProvider,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
