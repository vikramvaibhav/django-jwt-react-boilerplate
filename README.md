# Django JWT React Boilerplate

A boilerplate project setup for Django, JWT and React. The project contains backend user authentication with the Django REST Framework and Simple JWT. The frontend has react redux setup for user authentication by storing the token in localstorage.

## Features

- Django-based backend

  - [Django](https://www.djangoproject.com/)
  - [Django REST Framework](https://www.django-rest-framework.org/) used for building Web APIs.
  - [Simple JWT](https://github.com/SimpleJWT/django-rest-framework-simplejwt) provides a JSON Web Token authentication backend for the Django REST Framework.
  - Separate settings for different environments (base/local/production)
  - Python 3.6 or later
  - [SPA] Accessible from port `3000` for local development

- Frontend app with JavaScript (ES2015), React and Sass

  - [React](https://facebook.github.io/react/) for fast modular user interfaces
  - [Redux](https://redux.js.org/) for managing application state.
  - [Semantic UI React](https://react.semantic-ui.com/) used for CSS stylesheets & React components.
  - [SPA] Accessible from port `8000` for local development

### Prerequisites

Latest Version of any following Browser which supports HTML5 and JavaScript ES6.

```
Apple Safari
Google Chrome
Mozilla Firefox
Opera
Python version 3.6 or higher.
Node 12
Git
pipenv
```

## Backend development workflow

To use this template, first ensure that you have
[Pipenv](https://pipenv.readthedocs.io/en/latest/) `2020.8.13` available.

After that, you should:

1. Clone the repo and install the dependencies.
   ```
   git clone https://github.com/vikramvaibhav/django-jwt-react-boilerplate.git
   ```
2. Activate the virtualenv created by pipenv:
   ```
   pipenv shell
   ```
3. Install the requirements of the project template by running in django directory:
   ```
   pipenv install
   ```
4. Apply the migrations:
   ```
   python manage.py migrate
   ```
5. Run the Django development server:
   ```
   python manage.py runserver
   ```

## Frontend development workflow

First ensure that you have
[Node](https://nodejs.org/en/) `14.15.0` available.

1. In new terminal window go to the frontend directory:
   ```
   cd react/djrb-gui
   ```
2. Install the requirements to set up the library by running:
   ```
   npm install
   ```
3. Running the project:
   ```
   npm start
   ```
4. Building a distribution version:
   ```
   npm run build
   ```

## Authors

- **Vikram Vaibhav** - _Initial work_ - [vikramvaibhav](https://github.com/vikramvaibhav)

## License

This project is licensed under the MIT License.
