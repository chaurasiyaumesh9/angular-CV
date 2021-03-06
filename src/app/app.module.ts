import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { UserMetaDataService } from './Services/usermetadata.service';

import { MatButtonModule, MatCheckboxModule } from '@angular/material';

import { AppComponent } from './app.component';
import { WrapperComponent } from './Components/wrapper/wrapper.component';
import { HeaderComponent } from './Components/header/header.component';
import { MainContainerComponent } from './Components/main-container/main-container.component';
import { FooterComponent } from './Components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    HeaderComponent,
    MainContainerComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MatButtonModule, MatCheckboxModule
  ],
  providers: [ UserMetaDataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
