import React from 'react';
import { NavLink } from './components';
import { Common } from '~/types';
import './styles.scss';
import { bemHelper } from '~/libs';

const cn = bemHelper('side-menu');

type Props = {
  mix: string;
  navGroups: Common.NavGroup[];
};

export const SideMenu: React.FC<Props> = (props) => {
  const { mix, navGroups } = props;
  return (
    <nav className={cn('', '', mix)}>
      {navGroups.map(({ id, label, icon, to }) => (
        <NavLink key={id} icon={icon} to={to}>
          {label}
        </NavLink>
      ))}
    </nav>
  );
};
