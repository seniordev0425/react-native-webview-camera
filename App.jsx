import React, {Suspense} from 'react';
import {ActivityIndicator} from 'react-native';

import AppNavigator from './app/navigator';

export default App = () => {
  return (
    <Suspense fallback={<ActivityIndicator />}>
      <AppNavigator />
    </Suspense>
  );
};
