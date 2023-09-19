import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { TabsComponent } from './tabs/tabs.component';



@NgModule({
  declarations: [
    TopbarComponent,
    SidebarComponent,
    LayoutComponent,
    TabsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule { }
