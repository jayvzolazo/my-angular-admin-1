import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/views/dashboard/dashboard.component';
import { LayoutsComponent } from './components/views/layouts/layouts.component';
import { ComponentsComponent } from './components/views/components/components.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'layouts', component: LayoutsComponent },
  { path: 'components', component: ComponentsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
