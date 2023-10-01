import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      src: "assets/projects-images/mini-dashboard.png",
      name: "Mini Dashboard",
      codeUrl: "https://github.com/ahmedelayk/mini-dashboard",
      demoUrl: "https://dashboard-ahmedelayk.vercel.app/home",
      techUsed: ["Angular", "bootstrap", "apex-charts"]
    },
    {
      src: "assets/projects-images/portfolio.png",
      name: "My Portfolio",
      codeUrl: "https://github.com/ahmedelayk/portfolio-angular",
      demoUrl: "https://student-dashboard-sgnm-ahmedelayk.vercel.app/students",
      techUsed: ["Angular", "bootstrap"]
    },
    {
      src: "assets/projects-images/student-dashboardd.png",
      name: "Students Dashboard",
      codeUrl: "https://github.com/ahmedelayk/Student-Dashboard",
      demoUrl: "https://student-dashboard-sgnm-ahmedelayk.vercel.app/students",
      techUsed: ["Angular", "bootstrap", "json-server"]
    },
    {
      src: "assets/projects-images/healthify.png",
      name: "Healthify",
      codeUrl: "https://github.com/ahmedelayk/Healthify-Project",
      demoUrl: "https://healthify-ten.vercel.app/",
      techUsed: ["ReactJs", "Redux", "Firebase", "react-bootstrap"]
    },
    {
      src: "assets/projects-images/movies.png",
      name: "Trending Movies",
      codeUrl: "https://github.com/ahmedelayk/TrendingMovies",
      demoUrl: "https://trending-movies-six.vercel.app/",
      techUsed: ["ReactJs", "Bootstrap"]
    },
    {
      src: "assets/projects-images/todo.png",
      name: "To Do app",
      codeUrl: "https://github.com/ahmedelayk/ToDoListApp",
      demoUrl: "https://dashboard-ahmedelayk.vercel.app/home",
      techUsed: ["Html", "Css", "JavaScript"]
    },
    {
      src: "assets/projects-images/products.png",
      name: "Products cart",
      codeUrl: "https://github.com/ahmedelayk/StoreApp",
      demoUrl: "https://store-app-iota.vercel.app/",
      techUsed: ["Html", "Css", "JavaScript"]
    },
    {
      src: "assets/projects-images/agency-template2.png",
      name: "Agency Template 1",
      codeUrl: "https://github.com/ahmedelayk/OnePageTemplate",
      demoUrl: "https://template-gilt.vercel.app/",
      techUsed: ["Html", "Css", "JavaScript"]
    },
    {
      src: "assets/projects-images/agency-template.png",
      name: "Agency Template 2",
      codeUrl: "https://github.com/ahmedelayk/Agency-Template",
      demoUrl: "https://agency-template-blond.vercel.app/",
      techUsed: ["Html", "Css"]
    },
    {
      src: "assets/projects-images/agency-template1.png",
      name: "Agency Template 3",
      codeUrl: "https://github.com/ahmedelayk/Kasper-Template",
      demoUrl: "https://kasper-template-jet.vercel.app/",
      techUsed: ["Html", "Css"]
    },
  ]
}
