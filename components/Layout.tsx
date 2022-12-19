import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

function Layout({title, children}:any) {
  return (
    <div>
      <Head>
        <title>{title ? title  + " - Amazon": "Amazon"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <div className='flex flex-col min-h-screen justify-between'>   
      {/* HEADER */}
      <header>
        <nav className='flex items-center justify-between h-16 px-4 bg-slate-300 shadow-md'>
            <Link className="font-bold text-xl" href="\">
                amazon
            </Link>
            <div>
                <Link className="p-2" href="/cart">Cart</Link>
                <Link href="/login">Login</Link>
            </div>
        </nav>
      </header>

      {/* DYNAMIC COMPONENT */}
      <main className='container m-auto mt-4 px-4'>{children}</main>

      {/* FOOTER */}
      <footer className='flex justify-center items-center h-16 bg-slate-300 shadow-md shadow-gray shadow-inner'>
        Copyright &copy; 2022 Amazon Shop
      </footer>
    </div>

    </div>
  )
}

export default Layout