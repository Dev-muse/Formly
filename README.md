# User Management System

This project is a User Management System built with React, TypeScript, and PrimeReact. It allows users to search for existing users, edit their information, and create new users.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of [Node.js and npm](https://nodejs.org/en/download/)
- You have a Windows/Linux/Mac machine.

## Installing User Management System

To install the User Management System, follow these steps:

1. Clone the repository
   ```
   git clone https://github.com/dev-muse/formly.git
   ```
2. Navigate to the project directory
   ```
   cd formly
   ```
3. Install the dependencies
   ```
   npm install
   ```

## Using User Management System

To use the User Management System, follow these steps:

1. Start the development server
   ```
   npm start
   ```
2. Open your web browser and visit `http://localhost:3000`

You should now see the homepage of the User Management System.

## Features

- Search for users by ID
- View and edit existing user information
- Create new users
- Form validation for all input fields

## Project Structure

The main components of the project are:

- `src/App.tsx`: The main component that sets up routing
- `src/HomePage.tsx`: The homepage component with user search and create new user functionality
- `src/UserForm.tsx`: The form component for creating and editing users
- `src/api.ts`: Contains functions for API calls to DummyJSON
- `src/types.ts`: Contains TypeScript interfaces for the project

## Building for production

To create a production build, run:

```
npm run build
```

This will create a `build` directory with a production build of your app.

## Additional Information

- This project uses [React Router](https://reactrouter.com/) for routing.
- [PrimeReact](https://www.primefaces.org/primereact/) is used for UI components.
- [Axios](https://axios-http.com/) is used for making HTTP requests.
- The backend API is simulated using [DummyJSON](https://dummyjson.com/).

## Troubleshooting

If you encounter any issues:

1. Make sure all dependencies are installed correctly
2. Check if you're using the correct versions of Node.js and npm
3. Clear your browser cache and restart the development server

If problems persist, please open an issue in the GitHub repository.
