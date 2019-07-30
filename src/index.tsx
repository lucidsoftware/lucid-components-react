import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/*
import Icon from './components/icon/icon';
import Card from './components/card/card';
import Button from './components/button/button';
import Link from './components/link/link';
import Modal from './components/modal/modal';
*/

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

/*
export {
    Button,
    Card,
    Icon,
    Link,
    Modal
};
*/
