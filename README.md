<p align="center">
  <a href="https://moviefinder.stevenchung.me">
    <img width="140" src="./src/assets/icon.svg" alt="Logo">
  </a>
</p>

<h1 align="center">

  [**Movie Finder**](https://moviefinder.stevenchung.me)

</h1>

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
- [🖥️ Setup](#🖥️-setup)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Run Movie Finder](#run-movie-finder)
- [✍️ Making Your Own Changes](#✍️-making-your-own-changes)
  - [Available Commands](#available-commands)
  - [Writing Code](#writing-code)
  - [Deploying Code](#deploying-code)
- [👤 Author](#👤-author)
- [🤝 Contributing](#🤝-contributing)
- [⭐ Show your support](#⭐-show-your-support)

## 🎬 About Movie Finder

[**Movie Finder**](https://moviefinder.stevenchung.me) is a movie catalogue where you can find all the popular, top rated, and upcoming movies. You can browse and filter all the movie available as well as finding all basic information of each move in the listing. It was build with ReactJS & Redux and [The MovieDB](http://developers.themoviedb.org) was the API used to retrieve all information for the movies catalogue.


## ⚒️ Built With React & Redux

**<img height="15" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" alt="React"> [ReactJS](https://reactjs.org)**

**<img height="15" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/redux/redux.png" alt="Redux"> [Redux](http://redux.js.org)**

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

### Deploying Code

After you run the `npm run build` command, your code will be built into a single bundle located at `dist/bundle.min.js` along with any other assets you project depended.


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