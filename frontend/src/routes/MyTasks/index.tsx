import React from 'react';
import { RouteObject } from 'react-router';

export const MyTasks: React.FC = () => {
  return <div>My tasks</div>;
};

export const ROUTES: RouteObject[] = [
  {
    Component: MyTasks,
    path: '/my-tasks',
  },
];
