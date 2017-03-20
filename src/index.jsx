import 'babel-polyfill';
import React from 'react';
import configureStore from  './store/configureStore';
import {Provider} from 'react-redux';
import { render } from 'react-dom';
import App from './components/App';
import { Router, Route, Link, browserHistory , IndexRedirect } from 'react-router';
import Home from './components/home/Home';
import Education from './components/education/Education';
import MicroBlog from './components/microblog/Microblog';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import EmailForm from './components/contact/EmailForm';
import TextMessageForm from './components/contact/TextMessageForm';
import UserService from './services/user.service';
import { loadUser } from './actions/userActions.js';
import { loadEntries } from './actions/entryActions.js';
import { loadBlurbs } from './actions/blurbActions.js';

const userService = new UserService();
userService.getUser().then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})

const store = configureStore();
store.dispatch(loadUser());
store.dispatch(loadEntries());
store.dispatch(loadBlurbs());

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRedirect to="/home"/>
                <Route path="home" component={Home}></Route>
                <Route path="projects" component={Projects}></Route>
                <Route path="microblog" component={MicroBlog}></Route>
                <Route path="contact" component={Contact}>
                    <Route path="email" component={EmailForm}></Route>
                    <Route path="text" component={TextMessageForm}></Route>
                </Route>
                <Route path="education" component={Education}></Route>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
)
