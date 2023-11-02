

import React from "react";
import { useState,useEffect } from "react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Tour_list from "./pages/Tour_List";
import Layout from "./components/Layout"
import Menu from "./components/common/menu";
import Login from "./pages/log-in";
import Register from "./pages/register";
import Dashboard from "./pages/Dashboard";
import Dash_Massages from "./pages/Dash_Massages";
import "./styles/Dash_tour.css";
import "./styles/home.css";
import "./styles/Footer.css";
import "./styles/Header.css";
import "./styles/contact.css";
import "./styles/Create_tour.css";
import "./styles/menu.css";
import "./styles/login.css";
import "./styles/tourlist.css";
import "./styles/Dashboard.css";
import "./styles/User.css";
import "./styles/single_tour.css";
import Footer from "./components/common/Footer";
import Dash_menu from "./dash-pages/dash_menu";
import Dash_nav from "./dash-pages/dash_nav";
import Layout1 from "./dash-pages/layout_1.jsx";
import User from "./dash-pages/User";
import Dash_tour from "./pages/dash_tour";
import Single_tour from "./pages/single_tour";
import api from "./Api/api";
// import AppContext  from "./pages/AppProvider";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AppProvider from "./pages/AppProvider";
import Booked from "./pages/Booked";
// import { getTodos, postTodo } from '../my-api'

// Create a client
const queryClient = new QueryClient()



const App = () => {


  return (
    <div>
      <QueryClientProvider client={queryClient}>
      <AppProvider>
       <BrowserRouter>
    
        <Routes>
        
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>} />
           
            <Route path="Home" element={<Home/>} />
            <Route path="Tour_list" element={<Tour_list/>} />
            <Route path="Tour_list/:Tid" element={<Single_tour/>} />
            <Route path="Contact" element={<Contact/>} />
            <Route path="login" element={<Login/>} />
            <Route path="Register" element={<Register/>} />
            </Route>
            <Route path="Dashboard" element={<Layout1/>} >
           
            <Route index element={<Dashboard/>} />
            <Route path="Dashboard" element={<Dashboard/>} />
            <Route path="Dashboard/Dash_menu" element={<Dash_menu/>} />
            <Route path="Dashboard/Dash_nav" element={<Dash_nav/>} />
            <Route path="user" element={<User/>} />
            <Route path="Dash_tour" element={<Dash_tour/>} />
            <Route path="Dash_massage" element={<Dash_Massages/>}/>
            <Route path="Booked" element={<Booked/>}/>
            
            <Route
              path="*"
              element={
                <>
                  <h1>Page not Found</h1>
                  <Link to={"/"}>Back to home</Link>
                </>
              }
            />
            
          </Route>
         
         
        </Routes>
      </BrowserRouter> 
      </AppProvider> 
      </QueryClientProvider>
     
    </div>
  );
};

export default App;
