# Cube React Assessment Application

## Hosted Link

You can access the hosted application [here](https://cube-interview-assignment-shreesha.netlify.app/).

## Features

1. **Title List and Details Display**:

   - The webapp has a list of titles on the left side.
   - Upon clicking a card on the left, the details of the selected title are shown on the right side.

2. **Title Card Information**:
   - Each card in the list shows the name of the title and description.
3. **Right Side Details**:
   - Right side details include the title, subtitle and a 3x3 grid of 6 photos.
4. **Highlighting Selected Card**:
   - The selected card on the left is highlighted to indicate which Title's details are being viewed.
5. **Dynamic Photo Grid**:
   - All the pictures in the photo grid change every 10 seconds.
   - Photos are fetched from a public API [JsonPlaceholder](https://jsonplaceholder.typicode.com/photos).

## Running the App Locally

To run this application on your local machine, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/h-shreesha/cube-assignment.git
   cd cube-assignment
   ```

2. **Install Dependencies**:
   Make sure you have Node.js and npm installed. Then, run:

   ```bash
   npm install
   ```

3. **Run the Application**:

   ```bash
   npm start
   ```

   The application should now be running on `http://localhost:3000`.

## Directory Structure

The main files and directories in this project are:

- `src/`: Contains the source code for the application.
  - `components/`: Contains reusable React components.
  - `hooks/`: Contains custom hooks used in the application.
  - `App.tsx`: The main application component.
  - `index.tsx`: The entry point for the React application.
  - `styles/`: Contains the Tailwind CSS configuration and global styles.

## Additional Information about optimization implemented

    - The application uses React hooks (`useState`, `useEffect`) for managing state and side effects efficiently.

    - Used (` React.memo`, `useCallback`) to prevent unnecessary re-rendering.

    - For the left side sidebar, implemented Infinite Scrolling feature so that data keeps on loading as we scroll improving the initial load time.

    - Implemented Lazy Loading to improve the initial loading time.
