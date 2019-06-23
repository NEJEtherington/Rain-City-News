# Rain City News

Front-end for the NC-news API, built using React.
The interface allows users to log in as an existing user, comment on existing articles, and vote on articles and comments. Users can also delete their own comments.

Hosted on Netlify : https://rain-city-news.netlify.com  
Back End hosted on Heroku: https://nick-nc-news.herokuapp.com/api  
Back End repo: https://github.com/NEJEtherington/NC-news

### Getting Started

This app was implemented with node.js (v11.13.0) and npm (v6.9.0).

#### OSX:

Installing node and npm is easy using homebrew: simply copy and paste the following into your command line:

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)" && brew install node
```

If you already have homebrew installed just type:

```
brew install node
```

#### LINUX:

Run these commands in your terminal to install Node Version Manager which allows you to easily download the latest version of Node:

```
touch ~/.bash_profile
```

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.6/install.sh | bash
```

```
source ~/.nvm/nvm.sh
```

Now install Node using NVM:

```
nvm install node
```

```
nvm use node
```

For further information on installation please refer to the npm website: https://www.npmjs.com/get-npm

Once oyu have node and npm installed, clone this project locally then use npm to install dependencies:

```
npm install
```

This should bring in:

`react`

`react-scripts`

`react-dom`

`@reach/router`

`axios`

`fontawesome`

`react-google-font-loader`

`moment`

Check your node_modules folder to ensure that all required dependencies have been added.

### Running The App Locally

In your terminal, type:

```
npm start
```

You can now view the site in your web browser.

To stop the server running, enter `CTRL+C` in the terminal.
