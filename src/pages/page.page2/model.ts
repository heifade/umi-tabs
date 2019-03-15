export const NAMESPACE_PAGE1 = 'page.page2';

export default {
  namespace: NAMESPACE_PAGE1,
  state: {
    text1: '',
  },

  effects: {
    *handle(action, { put, call, select }) {},
  },

  reducers: {
    onChange(state, action) {
      state.text1 = action.payload;
    },
  },
};
