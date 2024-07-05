import React from 'react';
import {
  FlatList,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  View,
} from 'react-native';
import RootStore from '../root/Store';
import {useStore} from 'mobx-store-provider';
import {observer} from 'mobx-react-lite';
import TaskListCellView from '../taskListCell/View';
import SafeAreaView from '../components/SafeAreaView';

const headerLeft = self => {
  return () => (
    <TouchableOpacity style={{padding: 5}} onPress={self.request}>
      <Text>Load</Text>
    </TouchableOpacity>
  );
};
const headerRight = self => {
  return () => (
    <TouchableOpacity style={{padding: 5}} onPress={self.addNewTask}>
      <Text>New Task</Text>
    </TouchableOpacity>
  );
};

const TaskListView = ({route, navigation}) => {
  const root = useStore(RootStore);
  const self = root.taskListStore;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Today',
      headerLargeTitle: true,
      headerLeft: headerLeft(self),
      headerRight: headerRight(self),
    });
  }, []);

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        self.showDetailView(item);
      }}>
      <TaskListCellView route={{params: {self: item}}} />
    </TouchableOpacity>
  );
  const keyExtractor = item => item.id;

  const content = () => {
    switch (self.requestState) {
      case 'init':
        return <></>;
      case 'loading':
        return (
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <ActivityIndicator />
          </View>
        );
      case 'error':
        return (
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text>{self.error}</Text>
          </View>
        );
      case 'done':
        return (
          <FlatList
            data={self.taskStores.slice()}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
          />
        );
    }
  };

  return <SafeAreaView style={{flex: 1}}>{content()}</SafeAreaView>;
};

export default observer(TaskListView);
