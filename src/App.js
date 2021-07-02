import Contacts from './Components/contacts/Contacts';
import Navbar from './Components/Elements/Navbar';
import './style/App.scss';
import {Provider} from 'react-redux'
import store from './store'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AddContact from './Components/contacts/AddContact';
import EditContact from './Components/contacts/EditContact';

function App() {
  return (
    <Provider store={store}>
      <Router>
      <div className="">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Contacts}/>
          <Route exact path="/contact/addcontact" component={AddContact}/>
          <Route exact path="/contact/editcontact/:id" component={EditContact}/>
        </Switch>
      </div>
      </Router>
    </Provider>
  );
}

export default App;
