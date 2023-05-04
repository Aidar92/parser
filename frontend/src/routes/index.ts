import { RouteObject } from 'react-router';
import { ROUTES as Main } from './Main';
import { ROUTES as MyTasks } from './MyTasks';
import { ROUTES as Profile } from './Profile';

export const internalRoutes: RouteObject[] = [...Main, ...MyTasks, ...Profile];
