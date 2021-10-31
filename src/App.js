import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import SinglePack from './components/SinglePack/SinglePack';
import Header from './components/Shared/Header/Header';
import AuthProvider from './components/Context/AuthProvider';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AddNewPackage from './components/AddNewPack/AddNewPackage';
import Oders from './components/Oders/Oders';
import AllBooking from './components/AllBoking/AllBooking';
import Packages from './components/Packages/Packages';
import Footer from './components/Shared/Footer/Footer';





function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/package'>
            <Packages></Packages>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/addnewpackage'>
            <AddNewPackage></AddNewPackage>
          </Route>
          <Route path='/allbooking'>
            <AllBooking></AllBooking>
          </Route>
          <Route path='/mybooking'>
            <Oders></Oders>
          </Route>
          <PrivateRoute exact path='/package/:id'>
            <SinglePack></SinglePack>
          </PrivateRoute>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
