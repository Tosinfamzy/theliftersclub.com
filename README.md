# The Lifters Club

The Lifters Club is a web application designed to help users find and manage exercises for their workouts. The application is built using React, TypeScript, and Tailwind CSS, and it uses React Query for data fetching and state management.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API](#api)
- [Components](#components)
- [Hooks](#hooks)

## Installation

To get started with the project, clone the repository and install the dependencies:

```bash
git clone https://github.com/yourusername/theliftersclub.com.git
cd theliftersclub.com
npm install
```

## Usage

To run the application in development mode, use the following command:

```bash
npm run dev
```

To build the application for production, use:

```bash
npm run build
```

To preview the production build, use:

```bash
npm run preview
```

## Project Structure

The project structure is as follows:

```
/src
  /api
    axios.ts
  /components
    ExerciseForm.tsx
    ExerciseList.tsx
    Header.tsx
    Layout.tsx
    NotFound.tsx
  /hooks
    useExercises.ts
  /interfaces
    exercise.interface.tsx
  /routes
    router.tsx
  /types
    difficulty.ts
  App.tsx
  main.tsx
  vite-env.d.ts
/index.html
/package.json
/postcss.config.js
/tailwind.config.js
/tsconfig.json
/tsconfig.app.json
/tsconfig.node.json
/vite.config.ts
```

## API

The application uses an API to fetch exercise data. The base URL for the API is configured in the `.env` file:

```
VITE_APP_API_URL=<your_api_url>
```

## Components

- **ExerciseForm**: A form component for searching and adding exercises.
- **ExerciseList**: A component that lists all exercises fetched from the API.
- **Header**: The header component containing navigation links.
- **Layout**: A layout component that includes the header and renders child routes.
- **NotFound**: A component displayed when a route is not found.

## Hooks

- **useExercises**: A custom hook that fetches exercise data using React Query.
