# HomeGrown

## Inspiration

With the whole world on lockdown due to the COVID-19 crisis, more and more people are adapting to their new routine of life at home. However, with the sharp decline in customers many local businesses are struggling to adapt to the new norm. Business owners are faced with a difficult choice: stay open for their communities at risk of bankruptcy or shut down permanently. Additionally, millions of people are being unemployed every day as lockdowns are being extended. The world is slowly looking at its worst economic conditions in generations.
 
## What it does

HomeGrown is our solution to this: a web app that not only serves as a platform for small and local businesses to promote themselves to their communities but also to connect people locally with available financial aid resources and to find job openings in their vicinity.
When visiting our site, businesses nearby are displayed with exciting deals, posts, and advertisements on the website’s newsfeed. Customers will be able to search and filter the results based on the businesses name and the offered services. Furthermore, people will be able to search up available jobs to sustain themselves.
 
## Contributions

This project was made during the 2020 Hack3 Virtual Hackathon.
Team members:
Krish Mehta, Carol Xu, Rahul Aggarwal, Jeannie Quach

## How We Built It

We began with splitting the team into backend and frontend developers based on prior experience. The frontend team began designing ideas for the overall layout and the eventual functionality of the website. In contrast, the backend team gave feedback on these design ideas and determined the APIs needed to implement the desired functionality.
After that, the frontend team began coding the landing page and business listings page in static HTML, later on converting this to a React.JS web app. While this was happening, backend worked on using the Firebase API to perform user registration and authentication. Once this was done, the backend team moved on to determining user location by integrating the Google Maps API into HomeGrown. Finally, the frontend implemented a feature that would allow searching and filtering through all businesses listings and job postings included in our firebase.

HomeGrown was made with React.JS, Node.js, Jquery, and Firebase, and bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
 
## Challenges we ran into
* The first challenge we faced was working to create a database on MySQL and accessing data stored in the database with PHP in a React.js framework. With multiple problems occurring, we decided to pivot to firebase and react.js to create an OAuth account registration and login page.
* The second challenge we faced was the time constraints preventing us from creating new registrations and maintaining a live news feed. To tackle this problem, we created a static region-specific database of local shops, which, though not accurate, projects the full potential of our live news feed feature.
* The third challenge we faced was integrating the google maps GeoLocation API with our pages considering it is no longer a free service. Irrespective, we went ahead with the plan and continued to display the map in the developer mode, which also shows how beautifully the web app would work with all the necessary tools.
 
## Accomplishments that we are proud of
 
* We were able to create a database on firebase with OAuth registration and login directly connected with the database.
* Static newsfeed content was created to show and advertise local businesses in a region.
* We were able to connect the live rendering search engine to the database of the local businesses. 
* Created re-directs to help order from the shops as well as searching for jobs in the vicinity with the search engine.
* Integrated google maps GeoLocation API which asks for the user's location and shows registered shops in the vicinity through multiple markers.
* Successfully created a full-stack web app.
 
## What we learned
* Creating web applications with React.js
* Linking HTML, CSS and JavaScript files to Firebase database
* Limitations and advantages of the Google Maps API
* Learned how to create a live/static rendering search engine
 
## What's Next?
* Allowing small businesses to register an account on HomeGrown to post their advertisements and job listings.
* Turning the web app into a phone app: deployment to iOS and Android.
* Implement a dynamic refreshing/updating system into the job postings and business listings pages.
* Adding more businesses and locations to HomeGrown's database, which would eventually  lead to reaching out to small businesses in cities all around the world!
* Creating a dedicated portal to allow customers to directly order from registered businesses with the HomeGrown web application.
 
## Dependencies to Install in the Root Directory
 
These packages can be installed using the "npm install" command in the terminal line.
 
- react
- firebase
- react-firebaseui
- react-geocode
- react-autocomplete
- react-google-maps
- react-router-dom
- axios
- jquery
- qs
 
## Commands to Run
 
In the project directory, you can run the following commands:
 
### `npm start`
 
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
 
The page will reload if you make edits.<br />
You will also see any lint errors in the console.
 
### `nodemon server.js`
 
Runs the development server to connect with Google Maps API. In the terminal "nodemon starting node server.js Server running on port: 5000" should be running.
