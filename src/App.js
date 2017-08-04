import React, { Component } from 'react';
import Home from './ui/pages/Home/Home';
import { Provider } from 'react-redux';
import store from './redux/store';
import Tree from './ui/pages/Tree/Tree';
import Market from './ui/pages/Market/Market';
import Supmarket from './ui/pages/Supmarket/Supmarket'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
        	<Router>
        		<Switch>
        			<Route exact path='/' component={Home}/>
        			<Route path='/tree' component={Tree}/>
              <Route path='/market' component={Market}/>
              <Route path='/supmarket' component={Supmarket}/>
        		</Switch>
        	</Router>
       </Provider>
      </div>
    );
  }
}

export default App;
