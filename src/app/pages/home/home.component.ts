import { Component } from '@angular/core';
import { headerTabs } from 'src/models/headerTabs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  activeTab: string = headerTabs.home;

  setActiveTab(tab: string) {
    this.activeTab = tab
    // console.log(this.activeTab)
  }

}
