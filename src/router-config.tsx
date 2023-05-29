import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom'
import {
  ManageIndexPage,
  PageDetail,
  UserListPage,
  UserDetailPage,
  PostListPage,
  CreatePostPage,
  LoginPage,
  ForgotPasswordPage,
  HomePage
} from './Pages'
import { ManageLayout } from './Layouts'
import { PageList } from './Pages/PageManagement/PageList'
import { ServiceList } from './Pages/ServiceList/ServiceList'
import { ImageList } from './Pages/ImageManagement/ImageList'
import { ImageDetail } from './Pages/ImageManagement/ImageDetail'
import { FilterList } from './Pages/FilterManagement/FilterList'
import { FilterListCreate } from './Pages/FilterManagement/FilterListCreate'
export const RouterConfig = [
  {
    path: '',
    // element: <HomePage />
    name: 'Trang chủ',
    element: <Navigate to={'/manage'} />
  },
  {
    path: 'login',
    name: 'Login',
    element: <LoginPage />
  },
  {
    path: 'forgot-password',
    name: 'Quen mat khau',
    element: <ForgotPasswordPage />
  },
  {
    path: '/manage',
    name: 'Quản lý',
    element: <ManageLayout />,
    children: [
      {
        path: '',
        element: <ManageIndexPage />
      },
      {
        path: 'pages',
        name: 'Quan ly page',
        element: <PageList />
      },
      {
        path: 'pages/:id',
        name: 'Chi tiet trang',
        element: <PageDetail />
      },
      {
        path: 'users',
        name: 'User',
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
      },
      {
        path: 'service-list',
        name: 'Dịch vụ',
        element: <ServiceList />
      },
      {
        path: 'image-management',
        name: 'Ảnh',
        element: <Outlet/>,
        children: [
          {
            path: '',
            name: 'Quan ly anh',
            element: <ImageList />
          },
          {
            path: ':id',
            name: 'chi tiet ảnh',
            element: <ImageDetail />
          }
        ]
      },
      {
        path: 'filter-management',
        name: 'Filter',
        element: <Outlet/>,
        children: [
          {
            path: '',
            name: 'Quản lý filter',
            element: <FilterList />
          },
          {
            path: ':id',
            name: 'Chi tiết',
            element: <FilterListCreate />
          },
        ]
      }
    ]
  }
]
export const router = createBrowserRouter(RouterConfig);
