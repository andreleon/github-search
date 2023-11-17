# GitHub Repository Search Application

[![Netlify Status](https://api.netlify.com/api/v1/badges/c6aa9e13-e96c-4721-9c75-9b749805b26f/deploy-status)](https://andreleon-github-search.netlify.app/)

This project is a React-based Single Page Application (SPA) for searching GitHub repositories. It uses React with TypeScript, and leverages the GitHub API for fetching repository data. The application also incorporates MobX for state management, with persistent storage in `localStorage`.

## Features

- **Search Functionality**: Search GitHub repositories based on various criteria like name, description, stars, followers, and language.
- **Sort Options**: Sort search results by the number of stars and forks.
- **History Tracking**: Track search history with the ability to view and clear past searches.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm (usually comes with Node.js)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/andreleon/github-search.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd github-search
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

### Running the Application

- **Start the development server:**

  ```bash
  npm start
  ```

  This runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

- **Build the app for production:**

  ```bash
  npm run build
  ```

  This builds the app for production to the `build` folder.

### Code Formatting

- **Run Prettier to format code:**

  ```bash
  npm run prettier-write
  ```

- **Check the code formatting with Prettier:**

  ```bash
  npm run prettier-check
  ```

## Testing

TODO

## Contributing

Contributions are welcome. Please open an issue first to discuss what you would like to change, or directly open a pull request.

## License

This project is licensed under the [MIT License](LICENSE.md).

## React readme

This project was bootstrapped with [Create React App](./docs/CRA-README.md).
