import React from 'react';
import styles from './styles.less';
import { connect } from 'dva';
import { NAMESPACE_PAGEMANAGERMODEL, IPageData } from '@/models/pageManagerModel';

interface IProps {
  activedPageData: IPageData;
}

@connect(props => {
  return {
    activedPageData: props[NAMESPACE_PAGEMANAGERMODEL].activedPageData,
  };
})
export class PageManager extends React.PureComponent<IProps> {
  static getDerivedStateFromProps(props) {
    const { dispatch, location, children, activedPageData } = props;

    const { pathname } = location;

    if (activedPageData.url !== pathname) {
      dispatch({
        type: `${NAMESPACE_PAGEMANAGERMODEL}/onUrlChanged`,
        payload: {
          url: pathname,
          component: children,
        },
      });
    }
  }

  render() {
    const { activedPageData } = this.props;
    console.log(1111, activedPageData);
    return <div className={styles.content}>{activedPageData.component}</div>;
  }
}
