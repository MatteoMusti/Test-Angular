import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivitySearchComponent } from './activity-search/activity-search.component';
import { ActivitiesListComponent } from './activities-list/activities-list.component';
import { ActivityDetailsComponent } from './activity-details/activity-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ActivitySearchComponent,
    ActivitiesListComponent,
    ActivityDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
