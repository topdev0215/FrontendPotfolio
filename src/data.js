import project1 from './assets/images/project-1.png';
import project2 from './assets/images/project-2.png';
import project3 from './assets/images/project-3.png';
import project4 from './assets/images/project-4.png';
import project5 from './assets/images/project-5.png';

export const projects = [
  {
    title: 'Tech Blog',
    subtitle: 'Full Stack',
    description:
      'This is a tech blog built using NodeJS, ExpressJS, SequelizeJS and leverages BulmaCSS and Font Awesome for the front end. This application makes use of Sequelize as an ORM manager and saves data to a MYSQL2 database in the form of JawsDB as hosted on Heroku.',
    image: project2,
    link: 'https://github.com/b00000001/tech-blog'
  },
  {
    title: 'Workout Tracker',
    subtitle: 'Full Stack using Webpack',
    description:
      'This is a Full stack application that allows a user to view, create and track daily workouts. This Application will allow the user to add exercises to the most recent workout plan. Add new exercises to a new workout plan. View the combined weight of a workout plan and view the duration. This application makes use of Node, Express, MongoDB and Heroku for hosting. The connection to mongo is established through MongoDB Atlas.',
    image: project1,
    link: 'https://github.com/b00000001/workout-tracker'
  },
  {
    title: 'Progressive Budget Tracker',
    subtitle: 'Full Stack PWA Web app.',
    description:
      'This budget tracker is a progressive web app which uses Mongodb as the online database and uses IndexedDB as the offline datastore. This application uses chartJS to display data entered. This app will allow you to install it for online and offline use or add to homescreen.',
    image: project3,
    link: 'https://github.com/b00000001/progressive-budget'
  },
  {
    title: 'Weather Dashboard',
    subtitle: 'Javascript, AJAX',
    description:
      'A weather app that makes use of the Open weather API and Javascript to display searchable weather data for some preset cities or a city of your choice. Deployed to GH pages.',
    image: project4,
    link: 'https://github.com/b00000001/weather-dashboard'
  },
  {
    title: 'Date Mate',
    subtitle: 'Javascript, AJAX, Bulma CSS',
    description:
      'HTML, CSS, and Javascript were used to create this program. The Bulma CSS framework was used to create the layout and do all of the styling. Javascript was used to dynamically create the recipe and movie suggestions once the buttons are pressed. The Spoonacular and The Movie Database APIs were used to generate the data about the food/wine and movie recommendations.',
    image: project5,
    link: 'https://github.com/b00000001/DateMate'
  },
  {
    title: 'biOptimizers Redesign',
    subtitle: 'Javascript, React, Tailwind CSS',
    description: 'An exercise in modernizing a webpage using ReactJS..',
    image: project4,
    link: 'https://b00000001.github.io/bioptimizers'
  }
];
