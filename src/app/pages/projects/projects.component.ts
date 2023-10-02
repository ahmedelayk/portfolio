import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      src: "assets/projects-images/mini-dashboard.webp",
      name: "Mini Dashboard",
      codeUrl: "https://github.com/ahmedelayk/mini-dashboard",
      demoUrl: "https://dashboard-ahmedelayk.vercel.app/home",
      techUsed: ["Angular", "bootstrap", "apex-charts"]
    },
    {
      src: "assets/projects-images/portfolio.webp",
      name: "My Portfolio",
      codeUrl: "https://github.com/ahmedelayk/portfolio",
      demoUrl: "https://portfolio-ahmedelayk.vercel.app/",
      techUsed: ["Angular", "bootstrap"]
    },
    {
      src: "assets/projects-images/student-dashboardd.webp",
      name: "Students Dashboard",
      codeUrl: "https://github.com/ahmedelayk/Student-Dashboard",
      demoUrl: "https://student-dashboard-sgnm-ahmedelayk.vercel.app/students",
      techUsed: ["Angular", "bootstrap", "json-server"]
    },
    {
      src: "assets/projects-images/healthify.webp",
      name: "Healthify",
      codeUrl: "https://github.com/ahmedelayk/Healthify-Project",
      demoUrl: "https://healthify-ten.vercel.app/",
      techUsed: ["ReactJs", "Redux", "Firebase", "react-bootstrap"]
    },
    {
      src: "assets/projects-images/movies.webp",
      name: "Trending Movies",
      codeUrl: "https://github.com/ahmedelayk/TrendingMovies",
      demoUrl: "https://trending-movies-six.vercel.app/",
      techUsed: ["ReactJs", "Bootstrap"]
    },
    {
      src: "assets/projects-images/todo.webp",
      name: "To Do app",
      codeUrl: "https://github.com/ahmedelayk/ToDoListApp",
      demoUrl: "https://to-do-list-app-ahmedelayk.vercel.app/",
      techUsed: ["Html", "Css", "JavaScript"]
    },
    {
      src: "assets/projects-images/products.webp",
      name: "Products cart",
      codeUrl: "https://github.com/ahmedelayk/StoreApp",
      demoUrl: "https://store-app-iota.vercel.app/",
      techUsed: ["Html", "Css", "JavaScript"]
    },
    {
      src: "assets/projects-images/agency-template2.webp",
      name: "Agency Template 1",
      codeUrl: "https://github.com/ahmedelayk/OnePageTemplate",
      demoUrl: "https://template-gilt.vercel.app/",
      techUsed: ["Html", "Css", "JavaScript"]
    },
    {
      src: "assets/projects-images/agency-template.webp",
      name: "Agency Template 2",
      codeUrl: "https://github.com/ahmedelayk/Agency-Template",
      demoUrl: "https://agency-template-blond.vercel.app/",
      techUsed: ["Html", "Css"]
    },
    {
      src: "assets/projects-images/agency-template1.webp",
      name: "Agency Template 3",
      codeUrl: "https://github.com/ahmedelayk/Kasper-Template",
      demoUrl: "https://kasper-template-jet.vercel.app/",
      techUsed: ["Html", "Css"]
    },
  ]
}
