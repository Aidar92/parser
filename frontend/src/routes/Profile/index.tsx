import React from 'react';
import { RouteObject } from 'react-router';

const Profile: React.FC = () => {
  return <div>Profile</div>;
};

export const ROUTES: RouteObject[] = [
  {
    Component: Profile,
    path: '/profile',
  },
];
