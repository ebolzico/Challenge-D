import './App.css';
import Login from './Components/Login'
import UserInfo from './Components/UserInfo'
import {Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Route exact path='/'><Login/></Route>
      <Route exact path='/userInfo'><UserInfo/></Route>
    </div>
  );
}

export default App;
