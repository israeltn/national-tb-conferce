import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Layout } from './compotents/portal-shared/Layout';
// import { UserLayout } from './compotents/userlayout/UserLayout';
import { Login } from './pages/abstarct-portal/auth/Login';
import { AdminElement } from './routes/AdminElement';
import { UserElement } from './routes/UserElement';
import { Register } from './pages/abstarct-portal/auth/Register';
// Landing Pages
import { Home } from './pages/conference-pages/Home';
import { About } from './pages/conference-pages/About';
import { Speakers } from './pages/conference-pages/Speakers';
import { Planning } from './pages/conference-pages/Planning';
import { Sponsorship } from './pages/conference-pages/Sponsorship';
import { Contact } from './pages/conference-pages/Contact';
import { Registration } from './pages/conference-pages/Registration';
// End Landing Pages

// Abstarct-Portal
import { Dashboard } from './pages/abstarct-portal/admin/dashboard/Dashboard'
import { Users } from './pages/abstarct-portal/admin/dashboard/Users'
import { Abstracts } from './pages/abstarct-portal/admin/dashboard/Abstracts'
import { Participants } from './pages/abstarct-portal/admin/dashboard/Participants'

import { UserDashboard } from './pages/abstarct-portal/admin/user/UserDashboard'
import { SubmitAbstract } from './pages/abstarct-portal/admin/user/SubmitAbstract'
// import { Abstracts } from './pages/abstarct-portal/admin/dashboard/Abstracts'



import { NotFound } from './pages/abstarct-portal/NotFound'

// End Abstarct-Portal
import { LandingPage } from './pages/conference-pages/LandingPage';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


// import axios from 'axios';
// axios.defaults.baseURL = "https://api.nationaltbconference.org/";
// axios.defaults.headers.post['Content-Type'] = 'application/json';
// axios.defaults.headers.post['Accept'] = 'application/json';

// axios.defaults.withCredentials = true; 
// axios.interceptors.request.use(function (config){
//   const token = localStorage.getItem('auth_token');
//   config.headers.Authorization = token ? `Bearer ${token}` : '';
//   return config;
// });


function App() {



  return (
    <>
     {/* <div>
      {isUser ? 'You are an admin!' : 'You are not an admin.'}
    </div> */}
          <Router>
            <Routes>
                            {/*Auth Routes */}
                      <Route path="login" element={<Login />}></Route>                     
                      <Route path="register" element={<Register />}></Route>

                      {/* <Route path="login" element={<Login />}>
                          
                          {localStorage.getItem('auth_token') ? <Route path="login" render={() => <Navigate to="/dashboard" />} /> : <Route path="login" element={<Login />}></Route>}
                      </Route>
                      <Route path="register" element={<Register />}>
                          {localStorage.getItem('auth_token') ? <Route path="register" render={() => <Navigate to="/dashboard" />} /> : <Route path="register" element={<Register />}></Route>}
                      </Route> */}

                      {/* National TB Conference landing page Routes */}
                    <Route path="/" element={<Home />}>  
                          <Route index element={<LandingPage />}/>                
                          <Route path="about" element={<About/>}/>
                          <Route path="speakers" element={<Speakers/>}/>
                          <Route path="planning" element={<Planning/>}/>
                          <Route path="sponsorship" element={<Sponsorship/>}/>
                          <Route path="contact" element={<Contact/>}/>
                          <Route path="registration" element={<Registration/>}/>
                    </Route>
                
                        {/* Abstract Portal Routes admin */}
                    <Route path="/dashboard" element={
                      <AdminElement>
                           {/* <Layout /> */}
                           <Route index element={<Dashboard />}/>                  
                       
                      </AdminElement>
                   
                    }> 
                    <Route index element={<Dashboard />}/>                  
                        <Route path="users" element={<Users/>}/>
                        <Route path="abstracts" element={<Abstracts/>}/>
                        <Route path="participants" element={<Participants/>}/>
                       
                    </Route>

                         {/* Abstract Portal Routes user */}
                    <Route path="/userdashboard" element={
                         <UserElement>                         
                        {/* <UserLayout /> */}
                        </UserElement>
                        
                        }>
                        <Route index element={<UserDashboard/>}/>
                        <Route path="submitabstract" element={<SubmitAbstract />}/>
                    </Route> 

                          {/* NotFound */}
                    <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </Router>
        <ToastContainer />
        </>
     
  );
}

export default App;
