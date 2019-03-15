import React from 'react';
import styles from './index.css';
import Menu from '@/component/menu';
import { PageManager } from '@/layouts/pageManager';
import Tab from '@/layouts/tab';

export default function(props) {
  return (
    <div className={styles.frame}>
      <Menu />
      <Tab />
      <PageManager {...props} />
    </div>
  );
}
