import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Home from './pages/Home';
// import About from './pages/About';
// import Features from './pages/Features';
// import Pricing from './pages/Pricing';
// import Contac from './pages/Contac';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>,
//   },
//   {
//     path: "home",
//     element:<Home/>,
//   },
//   {
//     path: "about",
//     element:<About/>,
//   },
//   {
//     path: "feture",
//     element: <Features/>,
//   },
//   {
//     path: "pricing",
//     element:<Pricing/>,
//   },
//   {
//     path: "contac",
//     element:<Contac/>,
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App/>
    {/* <RouterProvider router={router}/> */}
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
