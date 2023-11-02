# BrandplusUI


## Requirements
Running this project requires Node.js and NPM installed in your environment. Make sure you update to a version not older than what is specified below to avoid any compatibility issues.
```
$ node --version
v18.15.0

$ npm --version
9.5.0
```


## Installation & Configuration
- `npm install` to install all necessary modules and dependencies.
- `npm start` to run the react app in development mode. The default port would be `3000`. Open `http://localhost:3000` to view it in the browser.
- FOR TIKTOK ONLY:
    - The following installation steps are a workaround to make the Tiktok login/authorization flow work. Do not use this in production mode!
    - Make sure you have installed `ngrok` in your environment.
    - Open terminal and run this script to start an HTTP tunnel forwarding to your local port `3000` for the react app (change the port number if you run your react app in a different port): `ngrok http 80`
    - On the ngrok terminal, you'll see a forwarding url that looks like this: `https://fc55-146-115-46-137.ngrok-free.app`. Copy your forwarding url and you will need this in the next step.
    - Go to TikTok for Buisiness and navigate to MyApps. Change the redirect url with the forwarding url you just got in the last step.
    - Copy the v2 authorization URL on TikTok for Buisiness -> MyApps. Go back to the react app project code file. Navigate to the target file `Home.js` and find the function `handleTiktokLoginClick()`. Change the url for `window.location.href` to the v2 authorization URL you just get.


## Existing Bugs & Future Improvements
- Instead of hardcoding urls and parameters, put them all in a `.env` file at the root of the project.
- The Facebook login button only works for me (@Terry, administrator). Anyone trying to login with their Facebook account might fail. Ask me to manually add you to the project on Meta for Developers and it might take some time for Meta to approve this.