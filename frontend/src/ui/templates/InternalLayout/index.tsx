import React, { useCallback, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, SideMenu } from './components';
import { bemHelper } from '~libs';
import { useNavGroups } from '~/hooks';
import './styles.scss';

const cn = bemHelper('internal-layout');

export const InternalLayout: React.FC = () => {
  const [menuActive, setMenuActive] = useState(true);

  const toggleMenu = useCallback(() => {
    setMenuActive((prevActive) => !prevActive);
  }, []);

  const { navGroups } = useNavGroups();

  return (
    <main className={cn(undefined, { 'menu-hidden': !menuActive })}>
      <div className={cn('side-menu-mask', { visible: menuActive })}>
        <SideMenu mix={cn('nav-group')} navGroups={navGroups} />
      </div>
      <Header
        menuActive={menuActive}
        mix={cn('header')}
        toggleMenu={toggleMenu}
      />
      <div className={cn('content')}>
        <Outlet />
      </div>
    </main>
  );
};
