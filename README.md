# Star Wars App 🚀✨

Welcome to the Star Wars App! This project is an Angular application that provides information about various Star Wars starships, including details about their pilots and the films in which they appear. This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.4.

## Features 🌟

- View details of different starships.
- See information about the pilots of each starship.
- Check out the films in which the starships have appeared.
- User registration and login functionality.
- JWT authentication and protected routes.

## Installation 🛠️

To get started with the project, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/star-wars-app.git
    cd star-wars-app
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the Angular development server:**

    ```bash
    ng serve
    ```

    The app should now be running on `http://localhost:4200`.


4. **Start the JSON server:**

    ```bash
    node server.js
    ```

    The JSON server should now be running on `http://localhost:3000`.

## Project Structure 📂

- `src/`: Contains the Angular application code.
  - `app/`: Main app directory with components, services, and other core files.
  - `assets/`: Contains images and other static assets.
  - `environments/`: Configuration for different environments.
- `backend/`: Contains the JSON server setup files.
  - `db.json`: Database file for the JSON server.
  - `server.js`: Server setup file for JSON server with JWT authentication.

## Usage 📖

1. **Registration:**
   - Navigate to the registration page and fill out the form to create a new user.
   - Upon successful registration, you will be redirected to the starships page.

2. **Login:**
   - Navigate to the login page and enter your credentials.
   - If the login is successful, you will be redirected to the starships page.
   - If the credentials are invalid, an error message will be displayed.

3. **Starships:**
   - View the list of starships and click on any starship to see more details.
   - The starship details page will show information about the starship, its pilots, and the films it appears in.

## Technologies Used 💻

- **Frontend:**
  - Angular
  - TypeScript
  - SCSS
  - Bootstrap

- **Backend:**
  - JSON Server
  - json-server-auth

## Contributing 🤝

Contributions are welcome! Please fork the repository and submit a pull request for any features, bug fixes, or enhancements.

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Enjoy exploring the Star Wars universe! 🌌✨
