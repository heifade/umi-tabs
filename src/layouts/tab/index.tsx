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
import { Icon } from 'antd';
import router from 'umi/router';

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
  onClose = (item: IPageData) => {
    const { dispatch } = this.props;
    dispatch({
      type: `${NAMESPACE_PAGEMANAGERMODEL}/onCloseTab`,
      payload: item,
    });

    router.push('/page2');
  };

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
            <Icon type="close" className={styles.close} onClick={() => this.onClose(item)} />
          </div>
        ))}
      </div>
    );
  }
}
