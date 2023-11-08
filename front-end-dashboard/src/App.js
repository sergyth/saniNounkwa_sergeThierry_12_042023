import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Accueil from './pages/Accueil';
import ErrorPage from './pages/ErrorPage';
import Dashboard from './pages/Dashboard';
import Layout from './pages/Layout';


function App() {
const router = createBrowserRouter([
  {
    path: "/", 
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      { 
        path: "/", 
        element: <Accueil/>, 
      },
      {
        path: 'user/:userId', 
        element: <Dashboard/>,
      },
    ],
  },

])

  return (
      <RouterProvider router={router}/>
  );
}

export default App;
