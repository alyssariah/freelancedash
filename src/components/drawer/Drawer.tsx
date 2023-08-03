'use client';
import Image from 'next/image';
import Link from 'next/link';
import { HamburgerMenu } from '../hamburger-menu/HamburgerMenu';
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { BsBell, BsCart, BsList, BsMenuUp, BsPerson, BsSearch } from 'react-icons/bs';
import { MdDirectionsRun } from 'react-icons/md';
import { useUI } from '@/contexts/managed-ui';
import { Button } from '../button/Button';
import { usePathname } from 'next/navigation';

export interface DrawerProps {
  links: Array<{
    icon: any;
    label: string;
    url: string;
  }>;
}

export default function Drawer({ links }: DrawerProps) {
  const pathname = usePathname();

  const { displayHamburger, openHamburger, closeHamburger, openModal } = useUI();

  useEffect(() => {}, [links]);

  return (
    <div
      className={clsx(
        'min-h-[100vh] h-[100%] z-[10] w-[100%] bg-white-500 text-black-500 border-r-black-50 dark:bg-black-500 dark:text-white-500 border-r-[1px] dark:border-r-black-400 py-4 flex flex-col items-center transition-width ease-in duration-200 overflow-hidden',
        {
          ['w-[100%] md:w-[320px] absolute top-[60px] md:sticky md:top-0']: displayHamburger,
          ['w-[0px] md:w-[60px] sticky top-0']: !displayHamburger,
        }
      )}
    >
      <div className="flex space-x-2 w-[100%] px-4">
        {displayHamburger && (
          <p className="text-xl">
            Freelance<span className="text-blue-500">Dash</span>
          </p>
        )}
        <MdDirectionsRun className="text-blue-500 text-3xl" />
      </div>
      <ul className="flex flex-col items-center pt-8 space-y-1 w-[100%]">
        {links.map((link, i) => {
          return (
            <li key={i} className="text-sm flex flex-col w-[100%] h-[50px]">
              <Link
                href={link.url}
                className={clsx('w-[100%] flex items-center h-[100%]', {
                  ['justify-center']: !displayHamburger,
                  ['px-4']: displayHamburger,
                })}
              >
                <div
                  className={clsx('flex items-center', {
                    ['bg-blue-50 text-blue-900']: link.url === pathname,
                    ['py-2 pl-4 pr-12 rounded-3xl']: displayHamburger,
                    ['p-[9px] text-[16px] rounded-lg']: !displayHamburger,
                  })}
                >
                  {link.icon}
                  {displayHamburger && <span className="pl-3">{link.label}</span>}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
