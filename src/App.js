import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import { createContext, useState } from 'react';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Booking from './components/Dashboard/Booking/Booking/Booking';
import BookingList from './components/Dashboard/Booking/BookingList/BookingList';
import AddReview from './components/Dashboard/Booking/AddReview/AddReview';
import AddServices from './components/Dashboard/AddServices/AddServices';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import OrderList from './components/Dashboard/OrderList/OrderList';
import Services from './components/Home/Services/Services';
import ManageService from './components/Dashboard/ManageService/ManageService';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';
import NoMatch from './components/NoMatch/NoMatch';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
       <Router>
         <Switch>
           <Route exact path="/">
             <Home></Home>
           </Route>
           <Route path="/home">
             <Home></Home>
           </Route>
           <Route path="/login">
              <Login></Login>
          </Route>
          <PrivateRoute path="/booking/:id">
              <Booking></Booking>
          </PrivateRoute>
          <PrivateRoute path="/booking">
              <Services></Services>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
             <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/bookingList">
             <BookingList></BookingList>
          </PrivateRoute>
          <PrivateRoute path="/addReview">
             <AddReview></AddReview>
          </PrivateRoute>
          <PrivateRoute path="/addServices">
             <AddServices></AddServices>
          </PrivateRoute>
          <PrivateRoute path="/orderList">
             <OrderList></OrderList>
          </PrivateRoute>
          <PrivateRoute path="/manageService">
             <ManageService></ManageService>
          </PrivateRoute>
          <PrivateRoute path="/addAdmin">
             <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
         </Switch>
       </Router>
    </UserContext.Provider>
  );
}

export default App;
