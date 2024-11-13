import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { AdminFooterComponent } from './components/admin/utilities/admin-footer/admin-footer.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { AdminNavbarComponent } from './components/admin/utilities/admin-navbar/admin-navbar.component';
import { AdminSidebarComponent } from './components/admin/utilities/admin-sidebar/admin-sidebar.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    AdminHomeComponent,
    AdminNavbarComponent,
    AdminSidebarComponent,
    AdminFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
