import React from 'react';
import { connect } from 'dva';
import { Input } from 'antd';
import { NAMESPACE_PAGE1 } from './model';

function Page2(props) {
  return (
    <div>
      <Input value={props.text1} onChange={props.onChange} />
    </div>
  );
}

export default connect(
  props => {
    return {
      text1: props[NAMESPACE_PAGE1].text1,
    };
  },
  dispatch => {
    return {
      onChange: e => {
        dispatch({
          type: `${NAMESPACE_PAGE1}/onChange`,
          payload: e.target.value,
        });
      },
    };
  }
)(Page2);
