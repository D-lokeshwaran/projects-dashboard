import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import routes from './routes/DashboardRoutes.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter(routes)
root.render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
);
