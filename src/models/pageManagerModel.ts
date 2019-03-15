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
    *handle(action, { put, call, select }) {},
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
  },
};
