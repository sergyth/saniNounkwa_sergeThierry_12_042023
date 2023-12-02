import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState } from 'react'
import './App.css';
import Accueil from './pages/Accueil';
import ErrorPage from './pages/ErrorPage';
import Dashboard from './pages/Dashboard';
import Layout from './pages/Layout';


function App() {
  const [useMockData, setUseMockData] = useState(false);
  const toggleData = () => setUseMockData(!useMockData)
  const [showUserList, setShowUserList] = useState(useMockData);
  const handleUserList = () => setShowUserList(!useMockData)
  const handleData = () => {
    toggleData()
    handleUserList()
  }

  const router = createBrowserRouter([
  {
    path: "/", 
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      { 
        index:true, 
        element: <Accueil useMockData={useMockData} showUserList={showUserList} handleData={handleData} />, 
      },
      {
        path: 'user/:userId', 
        element: <Dashboard useMockData={useMockData}/>,
      },
    ],
  },

])

  return (
      <RouterProvider router={router}/>
  );
}

export default App;
