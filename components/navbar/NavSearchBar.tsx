import React, { FunctionComponent, useState } from 'react';
import styles from './navbar.module.css';
import { Form, FormControl, InputGroup } from 'react-bootstrap';

type Props = {
  showInstallMobileAppPopup: any,
};
const NavSearchBar: FunctionComponent<Props> = (props) => {
  const { showInstallMobileAppPopup } = props;
  const [searchValue, setSearchValue] = useState('');
  function handleChange(e: any) {
    e.preventDefault();
    showInstallMobileAppPopup(true);
  }
  return (
    <Form inline className={styles.search_bar_padding_left}>
      <div className={styles.search_icon_container}>
        <img
          src="/images/icons/grey_search_icon.png"
          className={styles.search_icon}
          alt="Panion"
        />
      </div>
      <InputGroup>
        <Form.Control
          className={'from-control-with-left-icon'}
          type="text"
          value={searchValue}
          placeholder="Search"
          onChange={handleChange}
        />
      </InputGroup>
    </Form>
  );
};

export default NavSearchBar;
