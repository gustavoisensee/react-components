# react-components
It is a small library which contains a few components in react for web development.

![alt tag](https://raw.githubusercontent.com/gustavoisensee/react-components/master/public/main.png)

# How to Install
You just need to run
```sh
yarn add @gustavoisensee/react-components
```

# How to Use it
It is quite simple, but it depends on each component, here is an example for `Button` component.
```js
import { Button } from '@gustavoisensee/react-components';

<Button text='Test' className='Button_primary' onClick={() => console.log('Button click')} />
```

If you want to check how to implement the other components please visit its [storybook page](https://react-components-v2.netlify.app/)

# Run project locally
* Make sure you have installed Node 9+ and Git.
* Open your terminal, enter a folder of your choice. for example: `cd /home/gustavo/github`
* Clone the project: `git clone https://github.com/gustavoisensee/react-components.git`
* Enter the folder: `cd react-components`
* Run: `yarn install`
* Run: `yarn storybook:start`
* Open it in your browser of your choice: http://localhost:6006

# Run tests
* Make sure your have run: `yarn install`
* Run `yarn test`

# Technologies used
* Node 9+
* Create react app
* Storybook