# Upcoming movies!

### Approach

The challenge for that project it's build a simple architecture, and connect to a an movie API called TMDB APi. The </br> project have 2 repositories, one for back-end and other for the front-end.The front-end was builded with ReactJs</br>
and was used material ui for react, to build the UI. The back-end was used Node Js with the framework AdonisJs. Adonis provide a banch of tools, was uses Authentication and migration from AdonisJs. and the database Postgres, the database was used to save the API users, and their tokens.

The front-end it's hosted on [netlify](https://www.netlify.com/). </br>
The [back-end](https://github.com/anologicon/upcoming-movies-backend/tree/master) it's hosted on [heroku](https://www.heroku.com/)

*To start this project, was used [Create React App](https://github.com/facebook/create-react-app)*

### Used Packages

- `react-router-dom` - Router to ReactJs, used to build the routes in the app. </br>
- `Axios` - Library to make HTTP requests. </br>
- `@material-ui/core` - It's a library with some ready components, was used to build the UI. </br>

### Architecture

`public` - Here are the public files, here are the index.html and manifest.json.</br>
`src`    - The source files. </br>
` ---- services` - The service has a API service, used to make request to the back-end</br>
` ---- pages` - Here are all pages from the application</br>
### Runing localhost

**Requirements: yarn, NodeJs**</br>

First install all dependencies. </br>

```bash
yarn install
```
Then you can run the app. </br>

```bash
yarn start
```
Now, the api it's running, and you can use the port `3000` to connect.</br>

Running in [http://localhost:3000](http://localhost:3000)
