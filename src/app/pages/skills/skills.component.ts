import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills = [
    {
      src: "assets/skills-logos/angularr.png",
      name: "angular",
      bgColor: "#dd1b16",
      textColor: "#FFF"
    },
    {
      src: "assets/skills-logos/ts.png",
      name: "typescript",
      bgColor: "#3178c6",
      textColor: "#FFF"
    },
    {
      src: "assets/skills-logos/js.png",
      name: "javascript",
      bgColor: "#f0db4f",
      textColor: "#323330"
    },
    {
      src: "assets/skills-logos/HTML5.png",
      name: "HTML",
      bgColor: "#e34c26",
      textColor: "#fff"
    },
    {
      src: "assets/skills-logos/CSS3.png",
      name: "CSS",
      bgColor: "#0074d9",
      textColor: "#fff"
    },
    {
      src: "assets/skills-logos/Bootstrap.png",
      name: "Bootstrap",
      bgColor: "#563d7c",
      textColor: "#fff"
    },
    {
      src: "assets/skills-logos/Sass.png",
      name: "Sass",
      bgColor: "#cc6699",
      textColor: "#fff"
    },
    {
      src: "assets/skills-logos/tailwindcss.png",
      name: "tailwind",
      bgColor: "#82bcf1",
      textColor: "#fff"
    },
    {
      src: "assets/skills-logos/Git.png",
      name: "Git",
      bgColor: "#f34f29",
      textColor: "#fff"
    },
    {
      src: "assets/skills-logos/Github.png",
      name: "Github",
      bgColor: "#7f7f7f",
      textColor: "#fff"
    },
    {
      src: "assets/skills-logos/React.png",
      name: "ReactJs",
      bgColor: "#88dded",
      textColor: "#fff"
    },
    {
      src: "assets/skills-logos/redux.png",
      name: "redux",
      bgColor: "#764abc",
      textColor: "#fff"
    },
    {
      src: "assets/skills-logos/Figma.png",
      name: "Figma",
      bgColor: "#1abcfe",
      textColor: "#fff"
    },
  ]
}
