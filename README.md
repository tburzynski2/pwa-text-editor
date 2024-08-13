# PWA Text Editor

## Description

This is a Progressive Web Application (PWA) text editor that allows users to create and save notes or code snippets directly in the browser. The app can be installed on your desktop for offline access.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Deployment](#deployment)
- [License](#license)

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/tburzynski2/pwa-text-editor.git

   ```

2. Navigate to the root directory of the project:

   ```bash
   cd pwa-text-editor/Develop

   ```

3. Install the necessary dependencies:

   ```bash
   npm install

   ```

4. Start the application:
   ```bash
   npm run start
   ```

## Usage

1. Open the application in your browser.
2. You can write notes or code snippets in the text editor.
3. Your content is automatically saved to IndexedDB.
4. The application will work offline and can be installed as a PWA by clicking the "Install" button.
5. Upon reopening the application, your previously saved content will be retrieved from the database.

## Features

- Offline Functionality
- Installable PWA
- Data Persistence
- Responsive UI

## Technologies Used

- JavaScript
- IndexedDB
- Workbox
- Webpack
- HTML/CSS

## Deployment

This application is deployed on [Render](https://pwa-text-editor-4qqm.onrender.comm).

## Screenshot

![Text Editor PWA screenshot](https://github.com/tburzynski2/pwa-text-editor/blob/main/Develop/client/src/images/JATE-Screenshot.jpg?raw=true)

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
