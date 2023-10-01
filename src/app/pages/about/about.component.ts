import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  
timeline: {
    time: string,
    name: string,
    title: string,
    details: string
}[] = [
  {
      time: "Jul 2023 - Current",
      name: "Global Transport Services GmbH",
      title: "Frontend Angular Developer",
      details: `<div>Responsible for:</div>
      <div>Building and maintaining user interfaces.</div>
      <div>Developing and integrating APIs and web services.</div>
      <div>Collaborating closely with back-end developers to ensure a smooth user experience.</div>
      <div>Identifying and resolving front-end issues through debugging and troubleshooting.</div>
      <div>Utilizing version control systems like Git/GitHub to manage code efficiently.</div>
      <div>Writing code to ensure compatibility across various browsers and accessibility standards.</div>`
  },
  // {
  //     time: "Mar 2023 - Current",
  //     name: "Upwork Freelancer",
  //     title: "Frontend Developer",
  //     details: "detailsss"
  // },
  {
      time: "Mar 2023 - Jun 2023",
      name: "Information Technology Institute (ITI)",
      title: "Frontend Developer",
      details: `<div>Skills:</div>
      <div><span class='fw-semibold'>HTML/CSS</span>: Proficiency in creating semantic HTML markup. Advanced CSS skills, including CSS Grid, Flexbox, and CSS pre-processors like Sass.</div>
      <div><span class='fw-semibold'>JavaScript</span>: Strong understanding of core JavaScript concepts. Familiarity with modern JavaScript features (ES6+).</div>
      <div><span class='fw-semibold'>Frontend Frameworks</span>: Experience with popular frontend frameworks like Angular, React. Understanding of component-based architecture.</div>
      <div><span class='fw-semibold'>Responsive Design and CSS Frameworks</span>: Knowledge of responsive design principles. Experience with CSS frameworks like Bootstrap.</div>
      <div><span class='fw-semibold'>Version Control</span>: Proficiency in using Git for version control, including branching and merging.</div>
      <div><span class='fw-semibold'>Debugging Tools</span>: Familiarity with browser developer tools for debugging and profiling frontend code.</div>
      <div><span class='fw-semibold'>Collaboration and Communication</span>: Ability to collaborate effectively within a team environment. Strong communication skills, both written and verbal.</div>
      <div><span class='fw-semibold'>Problem Solving</span>: Analytical and problem-solving skills to identify and fix frontend issues efficiently.</div>
      <div><span class='fw-semibold'>UI/UX Design Awareness</span>: Basic understanding of UI/UX design principles for effective collaboration with designers.</div>
      <div><span class='fw-semibold'>Continuous Learning</span>: Willingness to learn and adapt to new frontend technologies and best practices.</div>`
  },
  {
      time: "oct 2021 - Jan 2023",
      name: "Armed Forces Medical Complex",
      title: "Technical Support Engineer",
      details: `<div>Responsible for:</div>
      <div>Provide customer assistance.</div>
      <div>Analyze and resolve technical problems by guiding customers through troubleshooting processes.</div>
      <div>Collaborate with internal teams.</div>
      <div>Collect and report customer feedback to enhance product quality.</div>
      <div>Provide remote technical assistance using tools like remote desktop.</div>
      <div>Demonstrate professionalism, patience, and empathy in customer interactions.</div>`
  },
  {
      time: "Sep 2016 - Jul 2021",
      name: "Shoubra Faculty Of Engineering • Benha University",
      title: "Bachelor's degree, Computer Engineering",
      details: "<div>Grade: Very Good</div>"
  },
]
}
