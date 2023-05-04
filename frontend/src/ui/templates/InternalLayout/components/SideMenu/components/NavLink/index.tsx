import React, { memo } from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { bemHelper } from '~/libs';
import './styles.scss';

type Props = {
  children: React.ReactNode;
  disabled?: boolean;
  icon: IconDefinition;
  mix?: string;
  to: string;
};

const cn = bemHelper({ name: 'nav-link', prefix: 'side-menu-' });

const defaultProps = {
  disabled: false,
};

export const NavLink: React.FC<Props> = memo((props) => {
  const { children, icon, mix, to } = props;
  return (
    <RouterNavLink
      className={({ isActive }) => cn(undefined, { isActive }, mix)}
      to={to}
    >
      {icon && <FontAwesomeIcon className={cn('icon')} icon={icon} />}
      {children}
    </RouterNavLink>
  );
});

NavLink.defaultProps = defaultProps;
