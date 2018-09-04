import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/views/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutsComponent } from './components/views/layouts/layouts.component';
import { ComponentsComponent } from './components/views/components/components.component';
import { BoxComponent } from './components/views/components/box/box.component';
import { ButtonsComponent } from './components/views/components/buttons/buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    FooterComponent,
    LayoutsComponent,
    ComponentsComponent,
    BoxComponent,
    ButtonsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
