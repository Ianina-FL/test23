import React from 'react';
import { mdiLogout, mdiClose } from '@mdi/js';
import BaseIcon from './BaseIcon';
import AsideMenuList from './AsideMenuList';
import { MenuAsideItem } from '../interfaces';
import { useAppSelector } from '../stores/hooks';
import Link from 'next/link';

import { useAppDispatch } from '../stores/hooks';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

type Props = {
  menu: MenuAsideItem[];
  className?: string;
  onAsideLgCloseClick: () => void;
};

export default function AsideMenuLayer({
  menu,
  className = '',
  ...props
}: Props) {
  const asideStyle = useAppSelector((state) => state.style.asideStyle);
  const asideBrandStyle = useAppSelector(
    (state) => state.style.asideBrandStyle,
  );
  const asideScrollbarsStyle = useAppSelector(
    (state) => state.style.asideScrollbarsStyle,
  );
  const darkMode = useAppSelector((state) => state.style.darkMode);

  const handleAsideLgCloseClick = (e: React.MouseEvent) => {
    e.preventDefault();
    props.onAsideLgCloseClick();
  };

  const dispatch = useAppDispatch();
  const { currentUser } = useAppSelector((state) => state.auth);
  const organizationsId = currentUser?.organizations?.id;
  const [organizations, setOrganizations] = React.useState(null);

  const fetchOrganizations = createAsyncThunk('/org-for-auth', async () => {
    try {
      const response = await axios.get('/org-for-auth');
      setOrganizations(response.data);
      return response.data;
    } catch (error) {
      console.error(error.response);
      throw error;
    }
  });

  React.useEffect(() => {
    dispatch(fetchOrganizations());
  }, [dispatch]);

  let organizationName = organizations?.find(
    (item) => item.id === organizationsId,
  )?.name;
  if (organizationName?.length > 25) {
    organizationName = organizationName?.substring(0, 25) + '...';
  }

  return (
    <aside
      id='asideMenu'
      className={`${className} zzz lg:py-2 lg:pl-2 w-60 fixed flex z-40 top-0 h-screen transition-position overflow-hidden`}
    >
      <div
        className={`flex-1 flex flex-col overflow-hidden dark:bg-dark-900 ${asideStyle}`}
      >
        <div
          className={`flex flex-row h-14 items-center justify-between ${asideBrandStyle}`}
        >
          <div className='text-center flex-1 lg:text-left lg:pl-6 xl:text-center xl:pl-0'>
            <Link href={'/home'}>
              <b className='font-black'>test23</b>
            </Link>

            {organizationName && <p>{organizationName}</p>}
          </div>
          <button
            className='hidden lg:inline-block xl:hidden p-3'
            onClick={handleAsideLgCloseClick}
          >
            <BaseIcon path={mdiClose} />
          </button>
        </div>
        <div
          className={`flex-1 overflow-y-auto overflow-x-hidden ${
            darkMode ? 'aside-scrollbars-[slate]' : asideScrollbarsStyle
          }`}
        >
          <AsideMenuList menu={menu} />
        </div>
      </div>
    </aside>
  );
}
