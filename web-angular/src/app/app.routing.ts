/**
 * Created by griga on 7/11/16.
 */


import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from "./shared/layout/app-layouts/main-layout.component";
import { AuthLayoutComponent } from "./shared/layout/app-layouts/auth-layout.component";
import { ModuleWithProviders } from "@angular/core";

//guard
import { AuthGuard } from './guard/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    data: { pageTitle: 'Home' },
    canActivate: [AuthGuard],
    children: [

      { path: '', redirectTo: 'home', pathMatch: 'full', },
      { path: 'home', loadChildren: 'app/+home/home.module#HomeModule', data: { pageTitle: 'Home' } },
      { path: 'task-list', loadChildren: 'app/task-list/tasklist.module#TaskListModule', data: { pageTitle: 'Task list' } },
      { path: 'request', loadChildren: 'app/request/request.module#RequestModule', data: { pageTitle: 'Request' } },
      { path: 'report', loadChildren: 'app/report/report.module#ReportModule', data: { pageTitle: 'Report' } },
      { path: 'forms', loadChildren: 'app/+forms/forms-showcase.module#FormsShowcaseModule', data: { pageTitle: 'Forms' } },
      { path: 'graphs', loadChildren: 'app/+graphs/graphs-showcase.module#GraphsShowcaseModule', data: { pageTitle: 'Graphs' } },
      { path: 'tables', loadChildren: 'app/+tables/tables.module#TablesModule', data: { pageTitle: 'Tables' } },

      // { path: 'upload', loadChildren: 'app/hanna/upload/upload.module#UploadModule', data: { pageTitle: 'Upload' } },
      // { path: 'log', loadChildren: 'app/hanna/log/log.module#LogModule', data: { pageTitle: 'Log' } },
      { path: 'user-management', loadChildren: 'app/hanna/user-management/user-management.module#UserManagementModule', data: { pageTitle: 'User Management' } },
      { path: 'role-management', loadChildren: 'app/hanna/role-management/role-management.module#RoleManagementModule', data: { pageTitle: 'Role Management' } },
      // { path: 'batch-management', loadChildren: 'app/hanna/batch-management/batch-management.module#BatchManagementModule', data: { pageTitle: 'Batch Management' } },
      // { path: 'individual', loadChildren: 'app/hanna/individual/individual.module#IndividualModule', data: { pageTitle: 'Individual' } },
      // { path: 'job-dashboard', loadChildren: 'app/hanna/job-dashboard/job-dashboard.module#JobDashboardModule', data: { pageTitle: 'Job Dashboard' } },
      // { path: 'scheduler', loadChildren: 'app/hanna/scheduler/scheduler.module#SchedulerModule', data: { pageTitle: 'Scheduler' } },
      // { path: 'corporate', loadChildren: 'app/hanna/corporate/corporate.module#CorporateModule', data: { pageTitle: 'Corporate' } },
      // { path: 'parameter', loadChildren: 'app/hanna/parameter/parameter.module#ParameterModule', data: { pageTitle: 'Parameter' } },
      // { path: 'user-slik', loadChildren: 'app/hanna/user-slik/user-slik.module#UserSlikModule', data: { pageTitle: 'User SLIK' } },
      // { path: 'upload-corporate', loadChildren: 'app/hanna/upload-corporate/upload-corporate.module#UploadCorporateModule', data: { pageTitle: 'Upload Corporate' } },

      { path: 'maps', loadChildren: 'app/+maps/maps.module#MapsModule', data: { pageTitle: 'Maps' } },
      { path: 'latihan', loadChildren: 'app/latihan/latihan.module#LatihanModule', data: { pageTitle: 'Latihan' } },
    ]
  },

  { path: 'auth', component: AuthLayoutComponent, loadChildren: 'app/+auth/auth.module#AuthModule' },

  { path: '**', redirectTo: 'home' }
  //
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
