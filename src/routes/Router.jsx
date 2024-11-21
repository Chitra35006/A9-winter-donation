import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import HomeLayout from '../layout/HomeLayout';
import Login from '../components/Login';
import Register from '../components/Register';
import Four04Page from '../components/Four04Page';
import DonationCampPlace from '../components/DonationCampPlace';
import Home from '../components/Home';
import DivisionPage from '../components/DivisionPage';
import ShowDetails from '../components/ShowDetails';
import PrivateRoute from './PrivateRoute';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '',
                element: <Navigate to={'/'}></Navigate>
            },
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
                element: <DonationCampPlace></DonationCampPlace>,
                children:[
                    {
                        index: true,
                        element: <Navigate to="/donationCampP/division/1" replace />,
                    },
                    
                ]
            
            },
            {
                path:'/donationCampP/division/:id',
                element: <DivisionPage></DivisionPage>,
                loader: async ({ params }) => {
                    const res = await fetch('/allData.json');
                    const data = await res.json();
                    const singleData = data.filter((d) => d.id == `${params.id}`);
                    console.log(singleData);
                    return { singleData }; // Returning singleData
                },

            },
            {
                path:'/division/:u_id',
                element: <PrivateRoute>
                    <ShowDetails></ShowDetails>
                </PrivateRoute>,
                loader: async ({ params }) => {
                    const res = await fetch('/allData.json');
                    const data = await res.json();
                    const singleData = data.find((d) => d.u_id == `${params.u_id}`);
                    console.log(singleData);
                    return { singleData }; // Returning singleData
                },
            },
            
            {
                path: '*',
                element: <Four04Page></Four04Page>
            }
        ]
    },
    
])

export default Router;