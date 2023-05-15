import { createBrowserRouter } from 'react-router-dom'
import { HomePage, ManageIndexPage } from './Pages'
import { ManageLayout } from './Layouts'
import { LoginPage } from './Pages/Login'
import { ForgotPasswordPage } from './Pages/ForgotPassword'

export const router = createBrowserRouter([
  {
    path: '',
    element: <HomePage />
  },
  {
    path: 'login',
    element: <LoginPage />
  },
  {
    path: 'forgot-password',
    element: <ForgotPasswordPage />
  },
  {
    path: '/manage',
    element: <ManageLayout />,
    children: [
      {
        path: '',
        element: <ManageIndexPage />
      }
    ]
  }
])
