import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { UserMetaDataService } from './Services/usermetadata.service';

import { MatButtonModule, MatCheckboxModule } from '@angular/material';

import { AppComponent } from './app.component';
import { CandidateDetailsComponent } from './Components/candidate-details/candidate-details.component';
import { WrapperComponent } from './Components/wrapper/wrapper.component';


@NgModule({
  declarations: [
    AppComponent,
    CandidateDetailsComponent,
    WrapperComponent
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
