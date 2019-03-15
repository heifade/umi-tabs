import React from 'react';
import Link from 'umi/link';
import styles from './styles.less';

export default class Menu extends React.PureComponent {
  render() {
    return (
      <ul className={styles.menu}>
        <li>
          <Link to="/page1">page1</Link>
        </li>
        <li>
          <Link to="/page2">page2</Link>
        </li>
        <li>
          <Link to="/page3">page3</Link>
        </li>
      </ul>
    );
  }
}
