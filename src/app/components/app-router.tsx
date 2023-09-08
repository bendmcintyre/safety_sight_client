import React from 'react';
import { createBrowserRouter, redirect, LoaderFunctionArgs, RouterProvider } from 'react-router-dom';

import { store } from '../store';

const IndexPage = () => {
  return(
    <>
      Index
    </>
  );
}

const protectedLoader = ({ request }: LoaderFunctionArgs) => {
  // check for an authenticated user
  const user = store.getState().auth.user;

  if (user) {
    return null;
  }

  // Save where we are - redirect back after login
  let params = new URLSearchParams();
  params.set('from', new URL(request.url).pathname);

  return redirect('/login?' + params.toString());
};

export const router = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    loader() {
      // root loader should always return the user
      return { user: null };
    },
    async lazy() {
      const { Layout } = await import('./layout');
      return { Component: Layout }
    },
    children: [
      {
        index: true,
        Component: IndexPage,
      },
      {
        path: '/login',
        async lazy() {
          const { LoginPage } = await import('../pages');
          return { Component: LoginPage }
        },
      },
      {
        path: '/register',
        async lazy() {
          const { RegistrationPage } = await import('../pages');
          return { Component: RegistrationPage }
        },
      },
      {
        path: '/app/settings/profile',
        loader: protectedLoader,
        async lazy() {
          const { ProfileSettingsPage } = await import('../pages/protected');
          return { Component: ProfileSettingsPage }
        },
      },
      {
        path: '/app/settings/billing',
        loader: protectedLoader,
        async lazy() {
          const { BillingHistoryPage } = await import('../pages/protected');
          return { Component: BillingHistoryPage }
        },
      },
      {
        // default to the 404 page
        path: '*',
        async lazy() {
          const { Page404 } = await import('../pages');
          return { Component: Page404 }
        },
      },
    ],
  },

  {
    path: '/logout',
    async action() {
      // 'resource route' for logout
      //
      console.log('delete cookies, clear localstorege, etc.');
      return redirect('/');
    }
  },
]);

// TODO: Replace placeholder div with appropriate element (SuspenseLoader?)
export const AppRouter = () => {
  return (
    <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
  );
};
