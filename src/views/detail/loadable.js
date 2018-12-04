import Loadable from 'react-loadable';
import React from 'react'

const LoadableComponent = Loadable({
  loader: () => import('./index'), // 指向异步加载的组件
  loading () {
    return <div>正在加载</div>
  }, // 显示loading时的组件
});

// export default () => <LoadableComponent/>;

export default class App extends React.Component {
  render() {
    return <LoadableComponent/>;
  }
}