
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './compoenent/NavBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProfileList from './compoenent/ProfileList';
import Profile from './compoenent/Profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route path='/' exact component={ProfileList}/>
        {/* <Route path='/info/:userID' component={Profile}/> */}
      </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
