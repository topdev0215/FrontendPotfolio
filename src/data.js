import project1 from "./assets/images/project-1.png";
import project2 from "./assets/images/project-2.png";
import project3 from "./assets/images/project-3.png";
import project4 from "./assets/images/project-4.png";

export const projects = [
  {
    title: "Tech Blog",
    subtitle: "MERN Stack",
    description:
      "This is a tech blog built using NodeJS, ExpressJS, SequelizeJS and leverages BulmaCSS and Font Awesome for the front end. This application makes use of Sequelize as an ORM manager and saves data to a MYSQL2 database in the form of JawsDB as hosted on Heroku.",
    image: project2,
    link: "https://murmuring-shelf-33596.herokuapp.com/"
  },
  {
    title: "Workout Tracker",
    subtitle: "MERN Stack using Webpack",
    description:
      "This is a Full stack application that allows a user to view, create and track daily workouts. This Application will allow the user to add exercises to the most recent workout plan. Add new exercises to a new workout plan. View the combined weight of a workout plan and view the duration. This application makes use of Node, Express, MongoDB and Heroku for hosting. The connection to mongo is established through MongoDB Atlas.",
    image: project1,
    link: "https://ancient-mountain-60363.herokuapp.com/"
  },
  {
    title: "Progressive Budget Tracker",
    subtitle: "MERN PWA Web app.",
    description:
      "This budget tracker is a progressive web app which uses Mongodb as the online database and uses IndexedDB as the offline datastore. This application uses chartJS to display data entered. This app will allow you to install it for online and offline use or add to homescreen.",
    image: project3,
    link: "https://aaron-progressive-budget.herokuapp.com/"
  },
  {
    title: "Weather Dashboard",
    subtitle: "Javascript, AJAX",
    description:
      "A weather app that makes use of the Open weather API and Javascript to display searchable weather data for some preset cities or a city of your choice. Deployed to GH pages.",
    image: project4,
    link: "https://b00000001.github.io/weather-dashboard/"
  }
];
