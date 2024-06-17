import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Error, Landing, Register, ProtectedRoute } from "./pages"
import { Profile, AllJobs, AddJob, Stats, SharedLayout } from './pages/dashboard'

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedRoute>
      <SharedLayout />
    </ProtectedRoute>,
    children: [
      {
        index: true,
        element: <Stats />
      }, 
      {
        path: 'all-jobs',
        element: <AllJobs />
      },
      {
        path: 'add-job',
        element: <AddJob />
      },
      {
        path: 'profile',
        element: <Profile />
      }
    ]
  },
  {
    path: 'landing',
    element: <Landing />
  },
  {
    path: 'register',
    element: <Register />
  },
  {
    path: '*',
    element: <Error />
  }
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
