import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesListComponent } from './activities-list/activities-list.component';
import { ActivityDetailsComponent } from './activity-details/activity-details.component';
import { ActivitySearchComponent } from './activity-search/activity-search.component';

const routes: Routes = [
  {path:'search', component: ActivitySearchComponent},
  {path:'list', component: ActivitiesListComponent},
  {path:'details', component: ActivityDetailsComponent},
  {path:'', component: ActivitySearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
