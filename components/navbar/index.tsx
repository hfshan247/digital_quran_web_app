import React, { useEffect, useState } from 'react';
import globalStyles from '../../styles/Home.module.scss';
import styles from './navbar.module.css';
import Router from 'next/router';
// import { UserPhoto, CookieData } from '../../../types';
import { Container, Navbar, Row, Col } from 'react-bootstrap';
import NavSearchBar from './NavSearchBar';
import NavBarMenu from './NavBarMenu';
import Link from 'next/link';

const PanionNavBar: React.FC = () => {

  return (
      <Navbar
        bg="light"
        expand="lg"
        fixed={'top'}
        className={` ${styles.nav_background_color}`}>

        <Container>
          <Row style={{ width: '100%' }}>
              <Col
                className={'zero_horizontal_padding flex_aligned_row_center_container'}
                md={2}
                lg={3}
              >
                  <Link href={`/feed`}>
                    <img
                      src="/images/panion_logo_with_flag.png"
                      className={styles.nav_logo}
                      alt="Panion"
                    />
                  </Link>
              </Col>
              <Col
                className={'zero_horizontal_padding flex_aligned_row_center_container'}
                md={8} lg={6}>
                <div className={globalStyles.flex_direction_row_container}>
                  {/* <NavBarDropDownMenu /> */}
                  </div>
              </Col>
              <Col
                className={'zero_horizontal_padding flex_aligned_row_center_container'}
                md={2}
                lg={3}>
                <NavBarMenu />
              </Col>
          </Row>
        </Container>
      </Navbar>
  );
};

export default PanionNavBar;
