import '@styles/globals.scss';
import { ManagedUIContext } from '@contexts/managed-ui';
import { ModalUI } from '@components/modal/Modal';
import { SidebarUI } from '@components/sidebar/Sidebar';
import Navbar from '@components/navbar/Navbar';
import { Metadata } from 'next';
import { Footer } from '@components/footer/Footer';
import { NextAuthProvider } from '../provider';
import Drawer from '@/components/drawer/Drawer';
import {
  BsCalendar2Check,
  BsCurrencyDollar,
  BsFileTextFill,
  BsPeopleFill,
  BsSpeedometer,
} from 'react-icons/bs';

export const metadata: Metadata = {
  title: {
    default: 'Next.js Sanity Template',
    template: '%s | Next Sanity CMS',
  },
  description: 'Create Template with Next and Sanity',
  openGraph: {
    title: 'Next.js Sanity Template',
    description: 'Create Template with Next and Sanity',
    url: 'https://nextjs.org',
    siteName: 'Next.js',
    images: [
      {
        url: 'https://nextjs.org/og.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://nextjs.org/og-alt.png',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    noimageindex: true,
    googleBot: {
      'index': true,
      'follow': true,
      'noimageindex': true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  metadataBase: new URL('https://next-sanity-template-sigma.vercel.app/'),
  icons: {
    icon: '../favicon.ico',
    shortcut: '../favicon.ico',
  },
  // icons: {
  //   icon: '/next.svg',
  //   shortcut: '/next.svg',
  //   apple: [{ url: '/next.svg' }, { url: '/next/svg', sizes: '180x180', type: 'image/svg' }],
  //   other: {
  //     rel: 'apple-touch-icon-precomposed',
  //     url: '/next.svg',
  //   },
  // },
  manifest: '/manifest.json',
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js',
    description: 'The React Framework for the Web',
    siteId: '1467726470533754880',
    creator: '@nextjs',
    creatorId: '1467726470533754880',
    images: ['https://nextjs.org/og.png'],
  },
  themeColor: '#008080',
  generator: 'Next.js',
  category: 'technology',
  keywords: 'nextjs, react, sanity',
  // TODO: Verfiy site through google
  // verification: {
  //   google: 'google',
  // },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const links = [
    {
      icon: <BsSpeedometer />,
      label: 'Analytics',
      url: '/',
    },
    {
      icon: <BsCalendar2Check />,
      label: 'Projects',
      url: '/projects',
    },
    {
      icon: <BsCurrencyDollar />,
      label: 'Invoices',
      url: '/invoices',
    },
    {
      icon: <BsFileTextFill />,
      label: 'Contracts',
      url: '/contracts',
    },
    {
      icon: <BsPeopleFill />,
      label: 'Clients',
      url: '/clients',
    },
  ];

  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className="flex dark:bg-black-500 dark:text-white-500 bg-white-500 text-black-500"
      >
        <NextAuthProvider>
          <ManagedUIContext>
            <Drawer links={links} />
            <main className="flex flex-col items-center w-[100%] relative overscroll-none">
              <Navbar
                links={links}
                format="Center links"
                logo={{
                  image: '/logo.svg',
                  shortImage: '/logo-short.png',
                  alt: 'NextGen WebWorks Logo',
                }}
              />
              <div className="w-[100%] flex flex-col items-center bg-gray-50 text-black-500 dark:bg-black-700 dark:text-black-100">
                {children}
                {/* <Footer /> */}
                <footer className="w-[100%] p-4 flex justify-center">
                  &copy; Alyssa Jackson 2023
                </footer>
              </div>
              <ModalUI />
              <SidebarUI />
            </main>
          </ManagedUIContext>
        </NextAuthProvider>
      </body>
    </html>
  );
}
