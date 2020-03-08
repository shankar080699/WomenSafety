import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {ModalComponent} from './modal/modal.component'
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {ModalPagePage} from './modal-page/modal-page.page'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import {StorageBucket} from '@angular/fire/storage';
// ANGULAR MATERIAL
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { HistoryComponent } from './components/history/history.component';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule} from '@agm/core';
@NgModule({
  declarations: [AppComponent,HistoryComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, BrowserAnimationsModule, MatDialogModule,HttpClientModule,
  AngularFireStorageModule,AngularFireModule.initializeApp(environment.firebaseConfig),AgmCoreModule.forRoot({
    apiKey: 'AIzaSyByR9-m3aj5PfK4zHfSnCqQ6WcA3HA5PwQ'
  })  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: StorageBucket, useValue: 'my-bucket-name' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
