/* eslint-disable no-unused-vars */
import React from 'react'
import {createBrowserRouter,RouterProvider,Route,Link} from "react-router-dom";
import Home from './components/Home';
import { store } from './Redux/Store'
import { Provider } from 'react-redux'
import Details from './components/Details';
import { HandleProvider } from './auth/Auther';
const App = () => {
  const routing=createBrowserRouter([
    {path:"/",element:<Home/>},
    {path:"details",element:<Details/>}
  ])


  return (
    <>
    <Provider store={store}>
      <HandleProvider>
    <RouterProvider router={routing}/>
      </HandleProvider>

    </Provider>
  
    
    </>
  )
}

export default App