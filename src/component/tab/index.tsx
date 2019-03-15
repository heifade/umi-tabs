import React from 'react';
import styles from './styles.less';
import { connect } from 'dva';
import {
  IPageData,
  NAMESPACE_PAGEMANAGERMODEL,
  IPageManagerState,
} from '@/models/pageManagerModel';
import Link from 'umi/link';
import classnames from 'classnames';

interface IProps {
  pageManagerState: IPageManagerState;
}

@connect(props => {
  return {
    pageManagerState: props[NAMESPACE_PAGEMANAGERMODEL],
  };
})
export default class Tab extends React.PureComponent<IProps> {
  static getDerivedStateFromProps(props) {
    return {};
  }

  render() {
    const {
      pageManagerState: { openPageList, activedPageData },
    } = this.props;
    return (
      <div className={styles.tabLine}>
        {openPageList.map(item => (
          <div
            className={classnames(
              styles.tabItem,
              activedPageData.url === item.url ? styles.actived : ''
            )}
            key={item.url}
          >
            <Link to={item.url}>{item.url}</Link>
          </div>
        ))}
      </div>
    );
  }
}
