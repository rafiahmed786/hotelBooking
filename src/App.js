import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/LoginCredentials/Login/Login';
import Authprovider from './Pages/Hooks/Contexts/Authprovider';
import Register from './Pages/LoginCredentials/Register/Register';
import AllHotels from './Pages/AllHotels/AllHotels';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import Addhotels from './Pages/AddHotels/Addhotels';
import Booking from './Pages/Booking/Booking';
import MyBookings from './Pages/Booking/MyBookings/MyBookings';
import AllBookings from './Pages/Booking/AllBookings/AllBookings';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Footer from './Pages/Shared/Footer/Footer';
import About from './Pages/Home/About/About';

function App() {
  return (
    <div className="App">
     
     <Authprovider>

        <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/login'>
           <Login></Login>
          </Route>
          <Route path='/addhotel'>
           <Addhotels></Addhotels>
          </Route>
          <Route path='/hotels'>
          <AllHotels></AllHotels>
          </Route>
          <Route path='/booking/:id'>
          <Booking></Booking>
          </Route>
          <Route path='/mybooking'>
          <MyBookings></MyBookings>
          </Route>
          <Route path='/register'>
           <Register></Register>
          </Route>
          <Route path='/allbookings'>
           <AllBookings></AllBookings>
          </Route>
          <PrivateRoute path='/serviceDetail/:id'>
           <ServiceDetails></ServiceDetails>
          </PrivateRoute>
          <Route path='/about'>
           
          </Route>
          <Route to='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
     
          </Authprovider>

    </div>
  );
}

export default App;
