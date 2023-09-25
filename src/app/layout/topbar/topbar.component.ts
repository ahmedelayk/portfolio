import { Component, OnInit } from '@angular/core';
import { localStorageKeys } from 'src/models/localStorageKeys';
import { reserved } from 'src/models/reservedWords';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  mode: string = reserved.darkMode;
  element: any;
  constructor() { }

  ngOnInit(): void {
    this.element = document.documentElement;
    if (localStorage.getItem(localStorageKeys.themeMode)) this.mode = localStorage.getItem(localStorageKeys.themeMode)!;
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
        document.body.setAttribute("mode", reserved.lightMode);
        this.element.setAttribute("mode", reserved.lightMode);
        localStorage.setItem(localStorageKeys.themeMode, reserved.lightMode);
        break;
      case reserved.darkMode:
        document.body.setAttribute("mode", reserved.darkMode);
        this.element.setAttribute("mode", reserved.darkMode);
        localStorage.setItem(localStorageKeys.themeMode, reserved.darkMode);
        break;
      default:
        document.body.setAttribute("mode", reserved.darkMode);
        break;
    }
  }
}
