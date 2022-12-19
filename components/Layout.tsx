import Head from "next/head";
import Link from "next/link";
import React from "react";

import { ShoppingBagIcon, UserCircleIcon } from "@heroicons/react/24/outline";

function Layout({ title, children }: any) {
  return (
    <div>
      <Head>
        <title>{title ? title + " - Amazon" : "Amazon"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col min-h-screen justify-between">
        {/* HEADER */}
        <header>
          <nav className="flex items-center justify-between h-16 px-4 bg-gray-300">
            <Link className="font-bold text-2xl" href="/">
              e-shop
            </Link>
            <div>
              <Link className="p-4 relative" href="/cart">
                <ShoppingBagIcon className="inline h-8 w-8 hover:text-gray-500" />
                <span className="absolute font-bold -ml-3 -mt-2 text-center leading-5 text-xs w-5 h-5 rounded-full bg-red-400">
                  {0}
                </span>
              </Link>

              <Link href="/login">
                <UserCircleIcon className="inline h-8 w-8 hover:text-gray-500" />
              </Link>
            </div>
          </nav>
        </header>

        {/* DYNAMIC COMPONENT */}
        <main className="container m-auto mt-4 px-4">{children}</main>

        {/* FOOTER */}
        <footer className="flex justify-center items-center h-16 shadow shadow-black shadow-inner">
          Copyright &copy; 2022 Online Shop
        </footer>
      </div>
    </div>
  );
}

export default Layout;
