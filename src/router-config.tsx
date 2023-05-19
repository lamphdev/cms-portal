import { createBrowserRouter } from 'react-router-dom'
import {
  HomePage,
  ManageIndexPage,
  PageDetail,
  UserListPage,
  UserDetailPage,
  PostListPage,
  CreatePostPage
} from './Pages'
import { ManageLayout } from './Layouts'
import { LoginPage } from './Pages/Login'
import { ForgotPasswordPage } from './Pages/ForgotPassword'
import { PageList } from './Pages/PageManagement/PageList'

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
      },
      {
        path: 'pages',
        element: <PageList />
      },
      {
        path: 'pages/:id',
        element: <PageDetail />
      },
      {
        path: 'users',
        element: <UserListPage />
      },
      {
        path: 'users/:id',
        element: <UserDetailPage />
      },
      {
        path: 'posts',
        element: <PostListPage />
      },
      {
        path: 'posts/create',
        element: <CreatePostPage />
      }
    ]
  }
])
