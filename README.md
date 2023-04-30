# Movie App

About
A React App that consumes [TMDB API](https://developers.themoviedb.org/3/getting-started/introduction) to display the current trending, upcoming, top rated, and popular movies and tv-shows.

![GitHub Logo](/src/assets/movie.PNG)

## SetUp

Obtain our TMDB API KEY and place in a .env file

```
REACT_APP_API_KEY= ****
```

Then in your api call your can can access the KEY by using

```
...api_key=${process.env.REACT_APP_API_KEY}
```

# Tech Stack

1. [Fuctional Components](https://reactjs.org/docs/components-and-props.html) - JavaScript functions that accept props as an arguments and returns a React element(JSX).

1. [Material UI](https://mui.com/material-ui/getting-started/overview/) - is a library of React UI components that implements Google's Material Design to easily develop apps.

1. [React-router](https://reactrouter.com/docs/en/v6) - routing library for react.

1. [axios](https://axios-http.com/docs/intro) - Promise based HTTP client for the browser and node.js. e.tc

In the project directory, you can run:

```
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

```
npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
