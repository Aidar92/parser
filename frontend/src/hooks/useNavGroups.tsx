import { faCubes, faUser } from '@fortawesome/free-solid-svg-icons';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Common } from '~/types';

export const useNavGroups = (): {
  isNavGroupsLoaded: boolean;
  navGroups: Common.NavGroup[];
} => {
  const { t, ready: i18nLoaded } = useTranslation('nav-groups', {
    useSuspense: false,
  });

  const navGroups: Common.NavGroup[] = useMemo(() => {
    if (!i18nLoaded) {
      return [];
    }
    return [
      {
        id: 'home',
        label: t('Home'),
        icon: faCubes,
        to: '/',
        visible: true,
      },
      {
        id: 'profile',
        label: t('Profile'),
        icon: faUser,
        to: '/profile',
        visible: true,
      },
      {
        id: 'myTasks',
        label: t('My tasks'),
        icon: faCubes,
        to: '/my-tasks',
        visible: true,
      },
    ];
  }, [i18nLoaded, t]);

  return useMemo(
    () => ({
      isNavGroupsLoaded: i18nLoaded,
      navGroups,
    }),
    [i18nLoaded, navGroups]
  );
};
