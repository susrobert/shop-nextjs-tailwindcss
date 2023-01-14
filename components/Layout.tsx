import Head from 'next/head';
import Link from 'next/link';
import React, { useContext } from 'react';

import { ShoppingBagIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { Store } from '../utils/Store';

function Layout({ title, children }: any) {
  const { state, dispatch } = useContext(Store);

  return (
    <div>
      <Head>
        <title>{title ? title + ' - E-Shop' : 'E-Shop'}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col min-h-screen justify-between">
        {/* HEADER */}
        <header>
          <nav className="flex items-center justify-between h-16 px-4 bg-gray-300">
            <Link className="font-bold text-2xl" href="/">
              e-shop
            </Link>
            <div className="relative">
              <Link className="p-4" href="/cart">
                <ShoppingBagIcon className="inline h-8 w-8 hover:text-gray-500" />
                {state.cart.cartItems.length > 0 ? (
                  <span className="absolute font-bold -ml-3 text-center leading-5 text-xs w-5 h-5 rounded-full bg-red-400">
                    {state.cart.cartItems.reduce(
                      (acc, item) => acc + item.quantity,
                      0
                    )}
                  </span>
                ) : null}
              </Link>

              <Link href="/login">
                <UserCircleIcon className="inline h-8 w-8 hover:text-gray-500" />
              </Link>
            </div>
          </nav>
        </header>

        {/* DYNAMIC COMPONENT */}
        <main className="container m-auto mt-10 px-4">{children}</main>

        {/* FOOTER */}
        <footer className="flex justify-center items-center h-16 shadow shadow-inner">
          Copyright &copy; 2022 Online Shop
        </footer>
      </div>
    </div>
  );
}

export default Layout;
