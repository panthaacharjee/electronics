import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Component/Body/Home';
import Mobile from './Component/Body/Mobile/Mobile';
import Laptop from './Component/Body/Laptop/Laptop';
import Login from './Component/Body/Login/Login';
import Register from './Component/Body/Register/Register';
import Footer from './Component/Footer/Footer';
import Navbar from './Component/Header/Navbar';
import Watch from './Component/Body/Watch/Watch';
import Shirt from './Component/Body/Shirt/Shirt';

function App() {
  return (
    <>
      <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route  exact path="/signin" component={Login}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/laptop" component={Laptop}/>
          <Route exact path="/mobile" component={Mobile}/>
          <Route exact path="/watch" component={Watch}/>
          <Route exact path="/shirt" component={Shirt}/>
        </Switch>
      <Footer/>
    </>
  );
}

export default App;
