import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

import { myName, siteTitle } from "../src/constants"

export default function Layout({ children, home = false }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content={`Personal website for ${myName}`}
        />
        {/* <meta
          property="og:image"
          content={}
        /> */}
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              height={144}
              width={144}
              alt={myName}
            />
            <h1>{myName}</h1>
          </>
        ) : (
            <>
              <Link href="/">
                <a>
                  <Image
                    priority
                    src="/images/profile.jpg"
                    height={108}
                    width={108}
                    alt={myName}
                  />
                </a>
              </Link>
              <h2>
                <Link href="/">
                  <a>{myName}</a>
                </Link>
              </h2>
            </>
          )}
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </>
  )
}