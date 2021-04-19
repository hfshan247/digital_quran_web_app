import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Panion | The Community Engagement Platform</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://quran.com">Digital Quran</a>
        </h1>

        <p className={styles.description}>
        Build a community for your{' '}
        <br/>
          <code className={styles.code}>University</code>
          <br/>
          <code className={styles.code}>Alumni Network</code>
          <br/>
          <code className={styles.code}>Profissional Network</code>
          <br/>
          <code className={styles.code}>Orgonization</code>
          <br/>
          <code className={styles.code}>Workforce</code>
          <br/>
          <code className={styles.code}>University</code>
          <br/>
          <code className={styles.code}>Volunteer Work</code>
          <br/>
          <code className={styles.code}>Organization</code>
        </p>

        <div className={styles.grid}>
          <Link href="/feeds/feeds" >
            <a className={styles.card}>
            <h3>Feeds &rarr;</h3>
            <p>An all-in-one community management platform that helps you grow,
              engage, and monetize your online community.</p>
          </a></Link>

          <Link href="/communities/communities">
          <a  className={styles.card}>
            <h3>Communities &rarr;</h3>
            <p>An all-in-one community management platform that helps you grow,
              engage, and monetize your online community.</p>
          </a>
          </Link>

          <Link href="/groups/groups" >
          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Groups &rarr;</h3>
            <p>Foster new relationships within your network by hosting events and
              enabling people to form group activities around a common interest.</p>
          </a>
          </Link>

          <Link href="/landing/landing" >
          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Logout &rarr;</h3>
            <p>
              Hope you enjoyed the journey throught the platform. See you again!
            </p>
          </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://alfabolt.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/alfabolt.svg" alt="Alfabolt Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
