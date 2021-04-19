import React from 'react';
import Head from 'next/head';
import styles from './header.module.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export const siteTitle = 'Digital Quran | Verify Quranic Verses';

const Header: React.FunctionComponent<{}> = () => (
  <Head>
    <meta
      name="description"
      content="Digital Quran is a tool that allows you to verify quranic verses." />
    <meta
      property="og:image"
      content={`https://og-image.now.sh/${encodeURI(
        siteTitle,
      )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
    />
    <meta name="og:title" content={siteTitle} />
    <meta name="twitter:card" content="summary_large_image" />
    <title>{siteTitle}</title>
    <link rel="icon" href="https://panion.com/themes/custom/panion/favicon.ico" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
  </Head>
);

export default Header;
