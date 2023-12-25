import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import routes from './DashboardRoutes.js'
import Dashboard from './Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter(routes)
root.render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
);
