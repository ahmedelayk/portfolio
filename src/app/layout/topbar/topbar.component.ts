import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { EventService } from 'src/app/services/event.service';
import { localStorageKeys } from 'src/models/localStorageKeys';
import { reserved } from 'src/models/reservedWords';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  mode: string = reserved.lightMode;
  element: any;
  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.element = document.documentElement;
    if(localStorage.getItem(localStorageKeys.themeMode)) this.mode = localStorage.getItem(localStorageKeys.themeMode)!;
    this.changeMode(this.mode)
  }

  modeKey: { light: string; dark: string } = {
    dark: reserved.darkMode,
    light: reserved.lightMode,
  };


  changeMode(mode: string) {
    // console.log(mode);
    this.mode = mode;
    // this.eventService.broadcast(reserved.changeMode, mode);
    switch (mode) {
      case reserved.lightMode:
        document.body.setAttribute("data-layout-mode", reserved.lightMode);
        this.element.setAttribute("data-layout-mode", reserved.lightMode);
        document.body.setAttribute("data-sidebar", reserved.lightMode);
        this.element.setAttribute("data-sidebar", reserved.lightMode);
        this.element.setAttribute("data-topbar", reserved.lightMode);
        localStorage.setItem(localStorageKeys.themeMode, reserved.lightMode);
        break;
      case reserved.darkMode:
        document.body.setAttribute("data-layout-mode", reserved.darkMode);
        this.element.setAttribute("data-layout-mode", reserved.darkMode);
        document.body.setAttribute("data-sidebar", reserved.darkMode);
        this.element.setAttribute("data-sidebar", reserved.darkMode);
        this.element.setAttribute("data-topbar", reserved.darkMode);
        localStorage.setItem(localStorageKeys.themeMode, reserved.darkMode);
        break;
      default:
        document.body.setAttribute("data-layout-mode", reserved.lightMode);
        break;
    }
  }
}
