import React from 'react';
import { useTranslation } from 'react-i18next';
import { bemHelper } from '~/libs';
import { BurgerBtn } from '~/ui/atoms';

type Props = {
  menuActive: boolean;
  mix: string;
  toggleMenu: () => void;
};

const cn = bemHelper('header');

export const Header: React.FC<Props> = (props) => {
  const { mix, menuActive, toggleMenu } = props;

  const { t } = useTranslation();

  return (
    <header className={cn(undefined, undefined, mix)}>
      <BurgerBtn
        active={menuActive}
        mix={cn('burger-btn')}
        onClick={toggleMenu}
        title={menuActive ? t('Hide menu') : t('Show menu')}
      />
    </header>
  );
};
