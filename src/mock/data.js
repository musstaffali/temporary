import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Mustafa Mustafa',
  subtitle: "I'm a Full Stack Developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: "me.png",
  paragraphOne:
    "Hi all! I'm Mustafa, a Full Stack Development Student graduate at UPenn LPS Coding Bootcamp. An intensive 24-week-long bootcamp, dedicated to designing and building web applications.",
  paragraphTwo:
    "As a Full-Stack Student and aspiring Software Engineer, I'm excited to utilize technology to foster growth, development, and progress while also acknowledging the importance of interpersonal work toward equity and betterment. I'm particularly passionate about AI and Machine Learning--and the many opportunities in pairing them to solve global issues.",
  paragraphThree:
    "Skills: HTML3, CSS3, jQuery, Gatsby, Bootstrap, Gatsby, Firebase, JavaScript, React.js, Angular, Express.js, Handlebars, Node.js, MongoDB, SQL, and API Integration ",
  resume:
    "https://drive.google.com/file/d/1xFwNa40E6CTMJdkIDdSu1sPjqI8SmsHZ/view?usp=sharing", // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: "stocks.png",
    title: "WhatDaStock",
    info:
      'The StockFinder website, which we called "What the Stock", was our first collaborative coding project.',
    info2:
      "Reasearch company stocks as well as top trending stocks. Allows users to add there favorite list for future easy access. Users can refer to resource are for key terms and links to websites of interest.",
    url: " https://rachelkline.github.io/WhatTheStock/",
    repo: "https://github.com/musstaffali/StockFinder", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "savedatamoney.png",
    title: "Save Dat Money",
    info:
      "A budget tracker application that allows for offline access and functionality",
    info2: "This app is based on MongoDB, webmanifest, and service-worker.",
    url: "https://sheltered-reef-58812.herokuapp.com",
    repo: "https://github.com/musstaffali/save-dat-money", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "Restaurantfinder.png",
    title: "Restaurant Finder",
    info:
      "An application that allows the users to search for a restaurant using city and the app will return the results with restaurant name, address and manu and also it will pin point the restaurants location via Google Maps",
    info2: "",
    url: "https://findtherestaurant500.herokuapp.com/",
    repo: "https://github.com/musstaffali/project-2", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "staff.jpg",
    title: "Staff Directory",
    info:
      "Allows users to be able to view an entire employee directory at once so that I have quick access to their information.",
    info2: "",
    url: "https://staffdatabase.herokuapp.com",
    repo: "https://github.com/musstaffali/staffDirectory", // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: "twitter",
      url: "https://twitter.com/StaffFromAfrica",
    },
    {
      id: nanoid(),
      name: "linkedin",
      url: "https://www.linkedin.com/in/mustafa-inc/",
    },
    {
      id: nanoid(),
      name: "github",
      url: "https://github.com/musstaffali",
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
