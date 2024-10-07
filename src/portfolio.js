
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Miguel Gonzalez Aravena",
  title: "Hola, soy Miguel",
  subTitle: emoji("Ing. Civil en Informática 🖥️, con experiencia en desarrollo de aplicaciones móviles y web. Poseo conocimientos en JavaScript / Node.js / TypeScript / PHP / ionic."),
  resumeLink: "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/MiguelGonzalezAravena",
  linkedin: "https://www.linkedin.com/in/miguel-gonz%C3%A1lez-aravena-82878327/",
  gmail: "contacto@miguelgonzaleza.com",
  gitlab: "https://gitlab.com/MiguelGonzalezAravena",
  facebook: ""
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "Habilidades",
  subTitle: "Algunas tecnologías con las cuales he trabajado.",
  skills: [
    emoji("🌐 Desarrollo de páginas webs personales y para empresas"),
    emoji("📱 Desarrollo de aplicaciones móviles híbridas"),
    emoji("🔌 Integración de servicios de terceros como Firebase / OneSignal / Heroku / Sendgrid"),
    emoji("📨 Publicidad mediante correos masivos a través de Mailchimp / SendinBlue")
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "SASS",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "MSSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "ionic",
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Front-end/Diseño",  //Insert stack or technology you have experience in
      progressPercentage: "70%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Back-end",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  title: "Experiencia",
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Desarrollador web",
      company: "Datactil",
      companylogo: require("./assets/images/datactil_logo.jpg"),
      date: "Feb 2015 – Oct 2016",
      desc: "Primera práctica profesional de Ingeniería Civil en Informática.",
      descBullets: [
        "Proyecto Nimbu.travel: Desarrollo de dashboard, donde se muestran estadísticas de uso de tótem interactivo Nimbu.travel. Proyecto usado en turismo, trabajando en conjunto al Servicio Nacional de Turismo de Aysén.",
      ]
    },
    {
      role: "Desarrollador web",
      company: "Universidad de Valparaíso",
      companylogo: require("./assets/images/uv_logo.png"),
      date: "Oct 2016 – Jun 2017",
      desc: ".",
      descBullets: [
        "Proyecto 30mil ideas del Ministerio de Obras Públicas.",
        "Proyecto UVA 1409: STEM. Diseño e implementación de una estrategia para la evaluación y fortalecimiento continuo de competencias STEM."
      ]
    },
    {
      role: "Ingeniero de Software",
      company: "Universidad de Valparaíso",
      companylogo: require("./assets/images/uv_logo.png"),
      date: "Jul 2017 – Feb 2021",
      desc: "Desarrollador de aplicaciones móviles, y páginas webs referentes a la Universidad. Trabajo en conjunto al Banco Santander.",
      descBullets: [
        "Proyecto Observatorio TUI: Centro de Innovación de la Universidad de Valparaíso.",
        "Proyecto AppTUI UV: Aplicación móvil para estudiantes de pregrado.",
        "Proyecto AppTUI Académicos UV: Aplicación móvil para académicos."
      ]
    },
    {
      role: "Full-stack Developer",
      company: "ACID Labs",
      companylogo: require("./assets/images/acidlabs.jpeg"),
      date: "Jul 2017 – Mar 2022",
      desc: "Desarrollador de back-end y front-end para cliente BancoEstado.",
      descBullets: [
        "Desarrollo del flujo de login de la Nueva Web Minorista de BancoEstado.",
        "Desarrollo del nuevo flujo de primera conexión de cliente + integración de servicios de autenticación.",
        "Integración de servicios externos SMS(Salesforce).",
        "Integración de servicios internos del Banco(trazas)."
      ]
    },
    {
      role: "Technical Lead",
      company: "Empresas Gasco S.A.",
      companylogo: require("./assets/images/uv_logo.png"),
      date: "Mar 2022 – Actualidad",
      desc: "Líder técnico en proyectos de Desarrollo de Software.",
      descBullets: [
        "Liderar y redactar tareas técnicas a nivel de back-end y front-end.",
        "Automatización de tareas repetitivas.",
        "Diseño de soluciones técnicas.",
        "Integración de servicios de proveedores externos.",
        "Integración con interfaces en SAP.",
        "Desarrollo de proyectos base de front-end.",
        "Desarrollo de arquetipo de proyectos.",
        "Desarrollo de jobs a nivel de back-end."
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "MiguelGonzalezAravena", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  showBigProjects: false,
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: "https://drive.google.com/uc?id=1exWn9T6j8TsfDDHJnS3VR66eP6RiGAfY",
      link: "http://saayahealth.com/"
    },
    {
      image: "https://drive.google.com/uc?id=1MXoXcQRK-pH8J82wyjCW4SJk5AxJe7tf",
      link: "http://nextu.se/"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {
  showAchievements: false,
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image:
        "https://1.bp.blogspot.com/-Ig-v1tDXZt4/XDODmZvWp1I/AAAAAAAAB0A/KtbFdBPFVQw2O15FekkIR0Yg8MUp--rngCLcBGAs/s1600/GCI%2B-%2BVertical%2B-%2BGray%2BText%2B-%2BWhite%2BBG.png",
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
        { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
        { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Google_Assistant_logo.svg/1200px-Google_Assistant_logo.svg.png",
      footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu93Bd6LDbxPEOXr-hfLqLYzmHny8c0MJoI3exQP-lwpFLRT7g&s",
      footerLink: [
        { name: "Certification", url: "" },
        { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {
  showBlogs: false,
  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ]
};

// Talks Sections

const talkSection = {
  showTalks: false,
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/",
      image:
        "https://scontent.fkhi6-1.fna.fbcdn.net/v/t1.0-9/76714032_1730516240415559_1293494289556307968_o.jpg?_nc_cat=103&_nc_ohc=s5f81rdZd6wAQmqUa52YQBA21MjVOy7e-HN9jI7MspRDC-v5ahEouyInQ&_nc_ht=scontent.fkhi6-1.fna&oh=c29141a9a0de7ff2011a8191f5475a78&oe=5E83127C"
    }
  ]
};

// Podcast Section

const podcastSection = {
  showPodcasts: false,
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contáctame ☎️"),
  subtitle: "Cuéntame de tu proyecto, o tu idea y vemos cómo llevarla a cabo.",
  number: false,
  email_address: socialMediaLinks.gmail
};

//Twitter Section

const twitterDetails = {
  showTwitter: false,
  userName: "twitter"//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo, twitterDetails };
