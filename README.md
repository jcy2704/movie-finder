<p align="center">
  <a href="https://moviefinder.stevenchung.me">
    <img width="140" src="./src/assets/icon.svg" alt="Logo">
  </a>
</p>

<h1 align="center">

  [**Movie Finder**](https://frosty-fermi-aa55bd.netlify.app)

</h1>

<h3 align="center">

  **CATALOGUE OF MOVIES**

</h3>

<p align="center">
  <strong>Web App created by Steven Jack Chung</strong>
  <br>
  Project created using <a href="http://developers.themoviedb.org">TheMovieDB API</a> and <a href="https://reactjs.org">ReactJS</a> & <a href="http://redux.js.org">Redux</a>
</p>

<p align="center">
  <a href="https://moviefinder.stevenchung.me">
    <img src="https://img.shields.io/badge/OPEN%20Movie%20Finder-red?style=for-the-badge">
  </a>
</p>

<p align="center">
  <a href="https://github.com/jcy2704/movie-finder/issues">
    <img src="https://img.shields.io/badge/REPORT%20A%20BUG-royalblue?style=for-the-badge">
  </a>
   ‎ ‎ ‎ ‎
  <a href="https://github.com/jcy2704/movie-finder/issues">
    <img src="https://img.shields.io/badge/Request%20a%20feature-royalblue?style=for-the-badge">
  </a>
</p>

## Table of Contents
- [🎬 About Movie Finder](#🎬-about-movie-finder)
- [⚒️ Built With React & Redux](#⚒️-built-with-react-&-redux)
- [🟢 Live Demo](#🟢-live-demo)
- [🖥️ Setup](#🖥️-setup)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Run Movie Finder](#run-movie-finder)
- [✍️ Making Your Own Changes](#✍️-making-your-own-changes)
  - [Available Commands](#available-commands)
  - [Writing Code](#writing-code)
  - [Creating env variables](#creating-your-own-env-variables)
  - [Testing Code](#testing-code)
  - [Deploying Code](#deploying-code)
- [👤 Author](#👤-author)
- [🤝 Contributing](#🤝-contributing)
- [⭐ Show your support](#⭐-show-your-support)

## 🎬 About Movie Finder

[**Movie Finder**](https://moviefinder.stevenchung.me) is a movies catalogue where you can find all the popular, top rated, and upcoming movies. You can browse and filter all the movie available as well as finding all basic information of each move in the listing. It was build with ReactJS & Redux and [The MovieDB](http://developers.themoviedb.org) was the API used to retrieve all information for the movies catalogue.


## ⚒️ Built With React & Redux

**<img height="15" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" alt="React"> [ReactJS](https://reactjs.org)**

**<img height="15" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/redux/redux.png" alt="Redux"> [Redux](http://redux.js.org)**

[Netlify](https://netlify.com)

Axios

## 🟢 Live Demo

<h3>

  [Movie Finder](https://moviefinder.stevenchung.me)

</h3>

<a href="https://moviefinder.stevenchung.me">
  <img width="1440" alt="image" src="https://user-images.githubusercontent.com/64392568/114433684-b71db600-9b87-11eb-9829-849c5d04baf0.png">
</a>

## 🖥️ Setup

### Requirements

Internet Browser (Chrome, Firefox, Opera, etc)

[Git](https://git-scm.com/downloads) for version control.

[Node.js](https://nodejs.org) is required to install dependencies and run scripts via `npm`.

### Installation

After installing the tools required, go ahead and clone this repository by using [Git](https://git-scm.com/downloads) commands.

```
    git clone https://github.com/jcy2704/movie-finder.git
```

Or you can also download this repository and access it with navigation commands.

```
    cd /path/to/repository/movie-finder
```

To be able to run the web app smoothly you need to install Node dependencies by typing the following command on your terminal

```
    npm install
```

Now you are good to go!

### Run Movie Finder App

Now that you've installed the repository correctly. Go ahead and test it out by running the following command on the terminal

```
    npm start
```

This command will open a `localhost:3000` server where it will be running the web app until you close the server by using the key combo `CTRL + C` on the terminal.

And there you are running the app.

**Enjoy!**

## ✍️ Making Your Own Changes

### Available Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install project dependencies |
| `npm start` | Build project and open web server running project |
| `npm run build` | Builds code bundle with production settings (minification, uglification, etc..) |
| `npm test`| Test the the created test cases |

### Writing Code

After cloning the repo, run `npm install` from your project directory. Then, you can start the local development server by running `npm start`.

After starting the development server with `npm start`, you can edit any files in the `src` folder and webpack will automatically recompile and reload your server (available at `http://localhost:3000` by default).

### Creating your own ENV variables

To be able to create your own environmental variables you need to create a `.env` file in the root of the project.

You need to also name the variable with the follow prefix `REACT_APP_`.

For example,

```
  // .env

  REACT_APP_API_KEY=1234567
  REACT_APP_API_URL=https://api.example.com/
```

### Testing Code

To test your code, or changes, you need to create test cases for those. You can visit on the internet to learn how to create your test cases. After you create the cases, you can just run the test command on the terminal `npm test` and check if all test pass. If not then you need to fix your test cases or fix your code.

### Deploying Code

This project is deployed to Heroku, but you can use Netlify or other platforms you like.

For Heroku deployment we you can enter each of the following commands.

```
    heroku create your-app-name --buildpack mars/create-react-app

    // you can remove 'your-app-name' if you don't know what name to put


    git push heroku master

    // if you are deploying the project from the master branch


    git push heroku your-branch:master

    // if you are deploying from a branch different from master


    heroku open
```

After you deploy to Heroku, you need to go to the dashboard and create the environmental variables just like you did before in the `.env`, for Heroku.

You can visit the following [link](https://devcenter.heroku.com/articles/config-vars#using-the-heroku-dashboard) to learn how to add it.

And there you go! You have your app deployed to Heroku.

## 👤 Author

👤 **Steven Jack Chung**

- GitHub: [@jcy2704](https://github.com/jcy2704)
- Twitter: [@yiak_](https://twitter.com/yiak_)
- LinkedIn: [Steven Jack Chung](https://linkedin.com/in/stevenjchung)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/jcy2704/movie-finder/issues).

## ⭐ Show your support

Give a ⭐️ if you like this project!
