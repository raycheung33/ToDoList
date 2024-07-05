import React from 'react';
import RootView from '../root/View';
import RootStore from '../root/Store';
import {useProvider, useCreateStore} from 'mobx-store-provider';
import combinedEnv from '../env/combined';
import DebugSettings from './DebugSettings';

const App = () => {
  const env = combinedEnv(DebugSettings.isOnline);
  const rootStore = useCreateStore(RootStore, {}, env);
  const Provider = useProvider(RootStore);
  return (
    <Provider value={rootStore}>
      <RootView />
    </Provider>
  );
};

export default App;
