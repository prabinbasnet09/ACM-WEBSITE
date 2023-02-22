
import React from 'react'

import 
    { Route,
    HashRouter}
   from "react-router-dom";


/*import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
    NavLink,
    HashRouter
} from "react-router-dom";*/

import Navbar from './components/layout/Navbar';
import Home from "./components/pages/Home";
import Stuff from "./components/pages/Stuff";
import CurrentEvents from "./components/pages/CurrentEvents";
import DiscordCommunity from "./components/pages/DiscordCommunity";
import ExecutiveMembers from "./components/pages/ExecutiveMembers";
import Alumni from "./components/pages/Alumni";
import Footer from './components/layout/footer';
import Admin from './components/pages/Admin';
import TopButton from './components/layout/TopButton';


export default function App(){
  return (
    <HashRouter>
        <div>
          <Navbar />
          
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/stuff" component={Stuff}/>
            <Route path="/currentEvents" component={CurrentEvents}/>
            <Route path="/executiveMem" component={ExecutiveMembers} />
            <Route path="/admin" component={Admin} />
          </div>
          <Footer/>
        </div>
        {/* <Footer /> */}
        </HashRouter>
  )
}