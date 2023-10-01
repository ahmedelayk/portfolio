import { Component, ElementRef, ViewChild } from '@angular/core';
import { headerTabs } from 'src/models/headerTabs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  activeTab: string = headerTabs.home;
  services: {
    name: string,
    caption: string,
    description: string,
    icon: string,
    hovered: boolean
  }[] = [
    {
      name: "Website Development",
      caption: "Turning Ideas into Interactive Apps",
      description: "I specialize in developing dynamic web applications, transforming concepts into functional, feature-rich platforms that solve problems and engage users.",
      icon: "assets/services-icons/app-development.png",
      hovered: false
    },
    {
      name: "Responsive Design",
      caption: "Seamless Across All Devices",
      description: "I ensure that websites and applications I create are responsive, providing a consistent and visually appealing experience on desktops, tablets, and mobile devices.",
      icon: "assets/services-icons/responsive-design.png",
      hovered: false
    },
    {
      name: "Frontend Optimization",
      caption: "Speed and Performance Enhancement",
      description: "I focus on optimizing the frontend code and assets to deliver fast-loading web pages, improving user satisfaction and SEO rankings.",
      icon: "assets/services-icons/optimization.png",
      hovered: false
    },
    {
      name: "Cross-Browser Compatibility",
      caption: "Consistency on Every Browser",
      description: "I ensure that websites and web applications function seamlessly on various web browsers, providing a consistent experience to all users.",
      icon: "assets/services-icons/cross-platform.png",
      hovered: false
    },
    {
      name: "Code Maintenance",
      caption: "Keeping Your Codebase Healthy",
      description: "I provide ongoing support and maintenance to keep your frontend codebase up-to-date, secure, and free from technical issues.",
      icon: "assets/services-icons/maintenance.png",
      hovered: false
    },
    {
      name: "Performance Analysis",
      caption: "Data-Driven Improvements",
      description: "I analyze performance metrics to identify areas for improvement and implement data-driven enhancements that boost user satisfaction and conversion rates.",
      icon: "assets/services-icons/performance.png",
      hovered: false
    },
  ]

  setActiveTab(tab: string) {
    this.activeTab = tab
  }

}
