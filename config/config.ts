import routes from './router';

export default {
  treeShaking: true,
  plugins: [
    [
      'umi-plugin-react',
      {
        dva: {
          hmr: true,
          immer: true,
        },
        dynamicImport: { webpackChunkName: true },
      },
    ],
  ],
  routes,
};
