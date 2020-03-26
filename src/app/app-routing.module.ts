import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { PlannerComponent } from './planner/planner.component'
import { NotificationsComponent } from './notifications/notifications.component'
import { ProfileComponent } from './profile/profile.component'
import { SettingsComponent } from './settings/settings.component'


const routes: Routes = [
  {path : '', component: HomeComponent },
  {path : 'dashboard', component: DashboardComponent },
  {path : 'planner', component: PlannerComponent },
  {path : 'notifications', component: NotificationsComponent },
  {path : 'profile', component: ProfileComponent },
  {path : 'settings', component: SettingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
