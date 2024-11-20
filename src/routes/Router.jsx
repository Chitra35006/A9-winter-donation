import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../layout/HomeLayout';
import Login from '../components/Login';
import Register from '../components/Register';
import Four04Page from '../components/Four04Page';
import DonationCampPlace from '../components/DonationCampPlace';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children:[
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/donationCampP',
                element: <DonationCampPlace></DonationCampPlace>
            },
            {
                path: '*',
                element: <Four04Page></Four04Page>
            }
        ]
    },
    
])

export default Router;