First thing I need an environment for the application so I can start serious coding.

The game will be a PWA (Proressive Web App), meaning in short that the application will be a web application that support offline mode and with a correct UX on mobil devices.
For the purpose I'll use [lighthouse](https://medium.com/@addyosmani/progressive-web-apps-with-react-js-part-i-introduction-50679aef2b12) to assist me in the development.

I also mentionned in the purposed of this project that I'd would like to experiment with React.
Fortunatly, default setup for the [Create React App](https://reactjs.org/blog/2016/07/22/create-apps-with-no-configuration.html) [is now a PWA](https://reactjs.org/blog/2017/05/18/whats-new-in-create-react-app.html#progressive-web-apps-by-default)

So let's do it.
Initiate the project local working copy :
``` bash
λ mkdir KARMA
λ cd KARMA
λ git clone https://github.com/bubblebenj/open-games-karma.git ./
```

Install Create React App
```
λ npm install -g create-react-app
λ create-react-app karma
```

Install Create React App
```
λ cd karma\
λ npm start
Compiled successfully!

You can now view karma in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://192.168.0.38:3000/

Note that the development build is not optimized.
To create a production build, use npm run build.
```

