export const NAMESPACE_PAGEMANAGERMODEL = 'pageManagerModel';

export interface IPageData {
  url: string;
  component: any;
}

export interface IPageManagerState {
  openPageList: IPageData[];
  activedPageData: IPageData;
}

export default {
  namespace: NAMESPACE_PAGEMANAGERMODEL,
  state: {
    openPageList: [],
    activedPageData: {},
  },

  effects: {
    *onCloseTab(action, { put, call, select }) {
      yield put({
        type: 'onClose',
        payload: action.payload,
      });
      window.g_app.unmodel('page.page3');
    },
  },

  reducers: {
    onUrlChanged(state: IPageManagerState, action) {
      const { url, component } = action.payload;
      if (!state.openPageList.find(item => item.url === url)) {
        state.openPageList.push({
          url,
          component,
        });
      }
      state.activedPageData = {
        url,
        component,
      };
    },
    onClose(state: IPageManagerState, action) {
      const pageData: IPageData = action.payload;
      const { openPageList } = state;
      const index = openPageList.findIndex(item => item.url === pageData.url);
      openPageList.splice(index, 1);

      state.activedPageData = {};
    },
  },
};
