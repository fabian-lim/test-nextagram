import './App.css';
import {Route, Link } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import ProfilePages from './Pages/ProfilePages';
import NavbarDisplay from './Components/NavbarDisplay';

function App() {

  return (
    <>

      <NavbarDisplay />
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route path="/users/:profileId">
        <ProfilePages />
      </Route>
    </>
  )
}

export default App;
