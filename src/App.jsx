import { createBrowserRouter , createRoutesFromElements , RouterProvider , Route  } from 'react-router-dom'
import Home from './Pages/Home'
import SignIn from './Pages/SignIn'
import './App.css'
import LayoutApp from './Layout/LayoutApp'

// console.log(process.env.hheh_key);

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route>

      <Route path='/' element={<LayoutApp />} >
        <Route index element={<Home />} />
      </Route>


      <Route path='/signIn' element={<SignIn />} />
      <Route path='/signIn' element={<SignIn />} />
      <Route path='/signIn' element={<SignIn />} />
    </Route>
  ))

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App