import React, {useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Checkout from './Checkout';
import {Login} from "./Login.1";
import {auth} from './firebase'
import {useStateValue} from './StateProvider'//From React DATA Layer
import Payment from './Payment'
//two dependencies are needed for stripe -- @stripe/stripe-js, @stripe/react-stripe-js
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Order from './Order'
import Footer from './footer'
import Image from './image'

const promise = loadStripe(
  `pk_test_51HQqgaLeu2DHClsQyKtqeiOKNPBxuyNpW4okpP7uqoEobKSFjfaaPdn3PZav
     Lr5PTFA3tiuJkqb9tiJlVeWU79On00UJNw59z7`//The Publishable Key gotten from Stripe
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
      auth.onAuthStateChanged(authUser => {
        console.log('The user is', authUser);
        if(authUser){
          //the user was /is logged in
            dispatch({
              type: 'SET_USER',
              user: authUser
            })
        }else{
          //the user is logged out
            dispatch({
              type: 'SET_USER',
              user: null
            })
        }
      } )
  }, [])
  return (
    <Router>
      <div className="app">
      
          <Header />
     
         <Switch>
         <Route path="/login">
                <Login />
                <Footer />
           </Route>
        <Route path="/image">
           <Image />
       </Route>

         <Route path="/checkout">
                <Checkout />
                <Footer />
           </Route>
           <Route path="/orders">
                <Order />
                <Footer />
           </Route>

           <Route path="/payment">
              <Elements stripe={promise}>
                   <Payment />
                   <Footer />
              </Elements>
           </Route>

           <Route path="/">
                <Home /> 
                <Footer />
            </Route>
          
         </Switch>
         
          
      </div>
    </Router>
  );
}

export default App;
