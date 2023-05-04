import React from 'react';
import { Route, Routes, createBrowserRouter } from 'react-router-dom';
import { internalRoutes } from './routes';
import { InternalLayout } from './ui/templates';

export const router = createBrowserRouter(internalRoutes);

export const App = () => {
  return (
    <Routes>
      <Route element={<InternalLayout />}>
        {internalRoutes.map((route) => (
          <Route
            key={route.path}
            Component={route.Component}
            path={route.path}
          />
        ))}
      </Route>
    </Routes>
  );
};
