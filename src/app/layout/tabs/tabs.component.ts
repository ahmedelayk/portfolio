import { Component } from '@angular/core';
import { headerTabs } from 'src/models/headerTabs';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {

  activeTab: string = headerTabs.home;

  setActiveTab(tab: string) {
    this.activeTab = tab
  }
}
