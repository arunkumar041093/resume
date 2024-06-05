import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Automation Test Engineer",
    icon: mobile,
  },
  {
    title: "Game Test Engineer",
    icon: backend,
  },
  {
    title: "Trainer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "QA Engineer",
    company_name: "Turftown Sporting Pursuits Private Limited, India",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Apr 2022 - Dec 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Implemented automated testing from scratch, automating over 500 manual test cases using Java, Selenium, and Appium. This significantly reduced regression defects by 60% and led to a substantial decrease in testing time.",
    ],
  },
  {
    title: "QA Engineer",
    company_name: "GSN Games India Private Limited, India",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2019 - Apr 2022",
    points: [
      "Led 4 projects, effectively managed trade off. Exceeded KPI revenue targets by 40% (Q1 & Q2 2019) while ensuring high-quality software through consistent bug identification and timely builds.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in bug triage and providing constructive feedback to other testers.",
    ],
  },
  {
    title: "Software Test Engineer",
    company_name: "Indium Software India Private Limited, India",
    icon: shopify,
    iconBg: "#383E56",
    date: "May 2018 - Jan 2019",
    points: [
      "Implemented an API testing strategy utilising Postman and RESTAssured, which increased backend development time by 15%—identified and resolved critical API defects, leading to a 30% reduction in post-deployment bugs.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Planned and executed comprehensive testing strategies, developed test cases, and ensured software quality through rigorous manual and automated testing techniques.",
      "Identified and reported defects, worked closely with developers to prioritize and resolve issues, and conducted regression testing to validate fixes.",
    ],
  },
  {
    title: "Game Test Engineer",
    company_name: "PTWI India Private Limited, India",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Mar 2016 – May 2018",
    points: [
      "Identified and reported 20 high-priority bugs that could have caused crashes during gameplay, which improved the overall player experience.",
      "Ensured application functionality across Android, iOS, Kindle, Tablets, and iPad devices",
      "Improved cross-team collaboration and ensured project clarity by implementing the SCRUM framework. Streamlined communication across international clients and various time zones through active participation in sprint planning, daily stand-up meetings, and retrospectives.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Arun is a hard-working professional that leads by example. He puts in the effort and shows a good attitude throughout. He is able to motivate, lead and tutor other teammates to grow and become better testers. I was very happy to have him on my team and appreciated his brief and focused reports of the QA testing team progress.",
    name: "Javier AlbillosJavier Albillos",
    designation: "Software Developer",
    company: "ScopelySoftware",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Arun is very dedicated , trustable resource and he is able to understand the requirements with a clear analysis and is good at quality. He is a diligent co-worker and always happy to help. He has good hold in writing test cases, test coverage, creating QA Environment. In addition to his testing capabilities he is also good at organizing and leading the team to the right path and also shares all his key learnings to the team members. Best wishes to his career path.",
    name: "Davameena Venkadaswamy",
    designation: "Senior Manager QA",
    company: "GSN Games",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "I had the pleasure of working with ARUN for more than a year. He was detail oriented and knows about all the aspects of software testing also, capable of getting people to work together and communicate effectively. I admire your communication skill and ability to manage a team. He used to support me to take up the work proactively and handle the tough situations. Your helpful attitude shows you are ready to take on new challenges.",
    name: "Sharath Gowda",
    designation: "Software Engineer",
    company: "GSN Games",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
