import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/views/dashboard/dashboard.component';
import { LayoutsComponent } from './components/views/layouts/layouts.component';

import { ComponentsComponent } from './components/views/components/components.component';
import { BoxComponent } from './components/views/components/box/box.component';
import { ButtonsComponent } from './components/views/components/buttons/buttons.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'layouts', component: LayoutsComponent },
  {
    path: 'components',
    component: ComponentsComponent,
    children: [
      { path: 'box', component: BoxComponent },
      { path: 'buttons', component: ButtonsComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
    )
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
