# HomeGrown

## Inspiration

With the whole world on lockdown due to the COVID-19 crisis, more and more people are adapting to their new routine of life at home. However, with the sharp decline of customers, many local businesses are struggling to adapt. Businessowners are faced a difficult choice: stay open for their communities at risk of bankruptcy, or shut down permanently. Additionally, millions of people are being unemployed everyday as lockdowns are being extended. The world is slowly looking at it's worst economic coniditions in generations.

HomeGrown is our solution to this: a webapp that not only serves as a platform for small and local businesses to promote themselves to their communities and to connect with locally available financial aid resources, but also allows people to find job openings in the local shops in their vicinity. When customers looking for local businesses visit the site, it will display the businesses near them, and exciting deals, posts and advertisements being offered by the business in the newsfeed, and the customer will be able to search and filter the results based on the business name and the services they offer. Peopke will also be able to search up jobs to sustain themselves.

HomeGrown was made with React.JS and Firebase, and bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Contributions

This project was made during the 2020 Hack3 Virtual Hackathon.

Team members:
Krish Mehta, Carol Xu, Rahul Aggarwal, Jeannie Quach

## How We Built It
We began with splitting the team into backend and frontend developers based on prior experience. The frontend team began with designing ideas for the overall layout and eventual functionality of the website, and the backend team gave feedback on these design ideas and determined the APIs needed to implement the desired functionality. The frontend team began coding the landing page and business listings page in static HTML, and eventually converted this to a React.JS webapp, while backend worked on using the Firebase API to perform user registration and authentication. Once this was done, the backend team moved on to integrating the Google Maps API into HomeGrown to determine user location and the frontend implemented a feature that would allow searching and filtering through all the business listings and job postings.

## Challenges
* The first challenge we faced was working to create a database on MySQL and accessing data stored in the database with php and compute on javascript in a React.js framework. With multiple problems occuring, we decided to pivot to firebase and react.js to create an account OAuth registration and login page.
* The second challenge we faced was the time constrain which was preventing us from creating new registration, and maintaining a live newsfeed. To tackle this problem, we created a region-specific small database of local shops and static content, which, though not accurate, projects the full potential of a live newsfeed.
* The third challenge we faced was integrating the google maps GeoLocation API with our pages, considering it is no longer a free service. Irrespective, we went ahead with the plan and continued to display the map in the developer mode, which too shows how beautifully the web-app would work with all necessary tools.

## Accomplishments
* We were able to create a database on firebase with OAuth registration and login directly connected with the database.
* Static newfeed content was created to show and advertise local business in a region.
* Live rendering search engine was connected to the database, which would instantly show you the shop you are searching for.
* Created re-directs to help people order from the shops as well as allow people to search for jobs in the vicinity.
* Integrated google maps GeoLocation API which would ask for location of a person and show registered shops in the vicinity through multiple markers.
* Successfully created a full stack web-app.

## What's Next?
* Allowing small businesses to register an account on HomeGrown to post their own advertisements and job listings.
* Turning the webapp into a phone app: deployment to iOS and Android.
* Implement a dynamic refreshing/updating system into the Job Postings and Business Listings pages.
* Adding more businesses and locations to HomeGrown's database, eventually expanding to small businesses in cities all around the world!
* Creating a dedicated portal to allow customers to directly order from registered businesses with the HomeGrown web-app/application, as well as people to find job openings in the vicinity.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
