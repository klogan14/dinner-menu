import styles from './layout.module.css';
import Head from 'next/head';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Dinner menu';
export const siteTitle = 'Dinner Menu';

export default function Layout({ children, home }) {

    const navLinks = [
        {
          name: "Home",
          path: "/"
        },
        {
          name: "Calendar",
          path: "/calendar",
        },
        {
          name: "Recipes",
          path: "/recipes",
        },
        {
          name: "Add A Recipe",
          path: "/add-a-recipe",
        }
      ];

    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle,
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
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
                            alt=""
                        />
                        <h1 className={utilStyles.heading2Xl}>Home</h1>
                        {navLinks.map((link, index) => {
                            return (
                                <ul className={styles.navBar}>
                                <Link href={link.path}>
                                    <li key={index}>{link.name}</li>
                                </Link>
                                </ul>
                            );
                            })}
                    </>
                ) : (
                    <>
                        <nav>
                            {navLinks.map((link, index) => {
                            return (
                                <ul>
                                <Link href={link.path}>
                                    <li key={index}>{link.name}</li>
                                </Link>
                                </ul>
                            );
                            })}
                        </nav>
                        {children}
                    </>
                )}

                
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">← Back to home</Link>
                </div>
            )}
        </div>
    );
}
