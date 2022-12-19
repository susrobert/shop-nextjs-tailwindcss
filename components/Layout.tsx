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

      {/* HEADER */}
      <header>
        <nav>
            <Link href="\">
                amazon
            </Link>
            <div>
                <Link href="/cart">Cart</Link>
                <Link href="/login">Login</Link>
            </div>
        </nav>
      </header>

      {/* DYNAMIC COMPONENT */}
      <main>{children}</main>

      {/* FOOTER */}
      <footer>
        Copyright &copy; 2022 Amazon Shop
      </footer>
      

    </div>
  )
}

export default Layout