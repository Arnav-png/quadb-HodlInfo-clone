import { Switch, Route } from 'react-router-dom';
import {Hero } from '../src/components/Hero'
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/components/styles.css';
import Telegram from './components/Telegram';

function App() {
  return (
    <div className="App" style={{marginBottom:46}}>
    <Switch>
      <Route path='/' exact>
      <Hero /></Route>
      <Route path='/Telegram'><Telegram/></Route>
      
    </Switch>
    </div>
    
  );
}

export default App;
