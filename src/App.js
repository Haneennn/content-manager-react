import React from 'react';
import './style/App.scss';
import Navbar from './components/Navbar';
import Contacts from './components/contact/Contacts';
import {Provider} from 'react-redux';
import store from './Store';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import AddContact from './components/contact/AddContact';
import EditContact from './components/contact/EditContact';
function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="container-fluid">
    <div className="App">
      <header className="App-header">
       <Navbar/>
        <div className="py-3">
         <Switch>
           <Route exact path="/" component={Contacts}/>
           <Route exact path="/contact/add" component={AddContact}/>
           <Route exact path="/contact/edit/:id" component={EditContact}/>
         </Switch>
        </div>
      </header>
    </div>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
