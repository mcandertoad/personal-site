import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

import { myName, siteTitle } from "../../src/constants"

import styles from "./layout.module.css"
import utilStyles from "../../styles/utils.module.css"

export default function Layout({ children, home = false }) {
  return (
    <div className={styles.container}>
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
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
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
                    className={utilStyles.borderCircle}
                    height={108}
                    width={108}
                    alt={myName}
                  />
                </a>
              </Link>
              <h2
                className={styles.headerTitleSmall}
              >
                <Link href="/">
                  <a className={utilStyles.colorInherit}>{myName}</a>
                </Link>
              </h2>
            </>
          )}
      </header>
      <main className={styles.main}>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}