## [BrastleWark](https://brastlewarklist.netlify.app) 🐉 <br><br>

### Hot to use:

1. Type the name, age or profession of the desired BrastleWarker you want to find <br>
1. Scroll Down to load more Brastlewarkers <br>
1. Hover on the search results cards to see more information<br>

### Features:

- Infinite scrolling : Load more Brastlewarker as you scroll.
- Switching between Dark/Light theme: We are aware that not all "Orcs" are used to light, so we've implemented a Dark mode theme for a better UX.
- Search bar so you can quickly find your so desired Brastlewarker.
- The app takes in consideration heavy network calls, so no need to worry about exceeding your network quota.
- Data fetched from API calls are automatically cached once the app loads.
- We can also implement data persistence (in local storage for example) as a future functionality if needed.
- Responsive design that works well with desktop, tablet and mobile devices.

### External Library used in the project:

- React, Redux and Styled Component (for easy theming and styled component reusability)
- Library that could have been used: react-virtualized or react-window since we have a lot of data to render in our UI, we've implemented a simple work around to this in our redux logic.
- Library that could have been replaced: since it was required for this project we used Redux for our state management, but we could've easily replaced the functionality by using the context API paired with useReducer hook for example.
- Testing : Jest and React Testing Library.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run (you can also use npm if you prefer):

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
