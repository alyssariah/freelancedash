'use client';
import Image from 'next/image';
import Link from 'next/link';
import { HamburgerMenu } from '../hamburger-menu/HamburgerMenu';
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { BsBell, BsMoonFill, BsPerson, BsSearch, BsSunFill } from 'react-icons/bs';
import { useUI } from '@/contexts/managed-ui';
import { Button } from '../button/Button';
import { signIn, signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';

export interface NavbarProps {
  logo?: {
    image: string;
    shortImage: string;
    alt: string;
  };
  links: {
    label: string;
    url: string;
  }[];
  hamburger?: {
    animation: string;
    color: string;
  };
  darkmode?: boolean;
  actionItem?: {
    type: 'icon';
  };
  format: 'Right links' | 'Left links' | 'Center links';
}

export default function Navbar({
  logo = {
    image: '/logo.webp',
    shortImage: '/logo.webp',
    alt: 'Apps for Scratch Logo',
  },
  hamburger = { animation: '', color: '' },
  darkmode = false,
  format = 'Right links',
}: NavbarProps) {
  const { data: session, status } = useSession();
  const loading = status === 'loading';
  const ref = useRef<null | HTMLDivElement>(null);
  const { displayHamburger, openHamburger, closeHamburger, openModal } = useUI();

  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark'
  );

  const toggleTheme = (theme: 'light' | 'dark') => {
    setTheme(theme);

    localStorage.setItem('theme', theme);
  };

  useEffect(() => {
    const html = document.querySelector('html');
    if (theme === 'dark') {
      html?.classList.add('dark');
    } else {
      html?.classList.remove('dark');
    }
  }, [theme]);

  return (
    <header
      className={clsx(
        'flex w-[100%] sticky top-0 z-[50] bg-white-500 text-black-500  dark:bg-black-500 dark:text-white-500 '
      )}
    >
      <nav
        className={clsx(
          'flex items-center justify-between pr-6 h-[60px] border-b-[1px] border-b-black-50 dark:border-b-black-400 flex-1',
          {
            ['justify-between']: format == 'Center links',
            ['justify-start']: format !== 'Center links',
          }
        )}
      >
        <div className="flex justify-start items-center hover:cursor-pointer">
          <HamburgerMenu
            animationType={hamburger.animation ? hamburger.animation : 'middleArrow'}
            active={displayHamburger}
            setActive={displayHamburger ? closeHamburger : openHamburger}
          />
        </div>
        <span
          className={clsx('flex items-center space-x-6 ml-6', {
            ['w-[200px] justify-end']: format == 'Center links',
          })}
        >
          {theme === 'dark' ? (
            <BsMoonFill onClick={() => toggleTheme('light')} className="cursor-pointer" />
          ) : (
            <BsSunFill onClick={() => toggleTheme('dark')} className="cursor-pointer" />
          )}

          <Link href="/" title="notifications">
            <BsBell className="text-xl" onClick={openModal} />
          </Link>
          {!loading && !session && <Button label="Login" onClick={() => signIn()} />}
          {!loading && session && (
            <Link href="/profile" title="profile">
              <BsPerson className="text-xl" />
            </Link>
          )}
        </span>
      </nav>
    </header>
  );
}
