import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AuthProvider } from './auth/AuthContext.tsx'
import { RegisterPage } from './pages/RegisterPage.tsx';
import { LoginPage } from './pages/LoginPage.tsx';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {path: "/", element: <App/>,
    children: [
      {path: "login", element: <LoginPage/>},
      {path: "register", element: <RegisterPage/>},
    ]
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <RouterProvider router={router}/>
          </AuthProvider>
      </QueryClientProvider>
  </StrictMode>,
)
