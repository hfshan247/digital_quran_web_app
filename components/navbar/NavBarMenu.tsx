import React, { FunctionComponent } from 'react';
import styles from './navbar.module.css';
import { Form, FormControl, InputGroup, Nav, Navbar, Dropdown } from 'react-bootstrap';
import Router from 'next/router';

type CustomToggleProps = {
  onClick: (e: any) => void;
  userPhoto: string;
};

const CustomToggle = React.forwardRef<HTMLButtonElement, CustomToggleProps>(
  (props, ref) => (
    <div
      onClick={(e) => {
        props.onClick(e);
      }}
    >
    <Nav.Link
      className={styles.navbar_menu_item}
      href="#features"
    >
        <img className="round-image" src={props.userPhoto} />
      </Nav.Link>
    </div>
));

type UserMenuItem = {
  id: number,
  label: string;
  icon: string;
  onClick: () => void;
};

const NavBarMenu: FunctionComponent = () => {

  const userMenuItems: UserMenuItem[] = [
    {
      id: 1,
      label: 'Profile',
      icon: 'https://s3.eu-central-1.amazonaws.com/panion/eIHS6yPLgI160.jpeg',
      onClick: () => {
        alert('Not implemented yet');
      },
    },
    {
      id: 2,
      label: 'Explore',
      icon: '/images/icons/explore.png',
      onClick: () => {
        alert('Not implemented yet');
      },
    },
    {
      id: 3,
      label: 'Panions',
      icon: '/images/icons/panions.png',
      onClick: () => {
        alert('Not implemented yet');
      },
    },
    {
      id: 4,
      label: 'Saved',
      icon: '/images/icons/saved.png',
      onClick: () => {
        alert('Not implemented yet');
      },
    },
    {
      id: 5,
      label: 'Settings',
      icon: '/images/icons/settings.png',
      onClick: () => {
        alert('Not implemented yet');
      },
    },
    {
      id: 6,
      label: 'Logout',
      icon: '/images/icons/logout.png',
      onClick: () => {
        alert('Not implemented yet');
      },
    },
  ];

  return(
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link
          className={styles.navbar_menu_item}
          onClick={ () => { alert('Not implemented yet'); } }
          href="#calendar">
          <img src={'/images/icons/calendar_grey.png'} />
        </Nav.Link>
        <Nav.Link
          className={styles.navbar_menu_item}
          onClick={ () => { alert('Not implemented yet'); } }
          href="#messenger">
          <img src={'/images/icons/messenger_grey.png'} />
        </Nav.Link>
        <Nav.Link
          className={styles.navbar_menu_item}
          onClick={ () => { alert('Not implemented yet'); } }
          href="#features">
          <img src={'/images/icons/notification_grey.png'} />
        </Nav.Link>
        <Dropdown
          alignRight
        >
          <Dropdown.Toggle
            userPhoto={'https://s3.eu-central-1.amazonaws.com/panion/eIHS6yPLgI160.jpeg'}
            as={ CustomToggle }
            id="dropdown-custom-components"
          >
          </Dropdown.Toggle>
          <Dropdown.Menu
            className={`${styles.user_menu_container}`}
           >
             {
               userMenuItems.map((item) => {
                 return (
                  <Dropdown.Item
                    className={styles.user_menu_item}
                    eventKey={item.id.toString()}
                    onClick={() => {
                      item.onClick();
                    }}
                  >
                    <img src={item.icon} className={styles.icon} />
                    <div className={styles.label}>{item.label}</div>
                  </Dropdown.Item>
                 );
               })
             }

              {/* {
                userMenuItems.map((item) => {
                  <Dropdown.Item className={styles.dropdown_menu_item} eventKey={}>
                    <div>
                    {item.label}
                    </div>
                  </Dropdown.Item>
                })
              } */}
          </Dropdown.Menu>
        </Dropdown>
      </Nav>
    </Navbar.Collapse>
  );
};

export default NavBarMenu;
