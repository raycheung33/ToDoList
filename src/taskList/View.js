import React from 'react';
import {FlatList, TouchableOpacity, Text} from 'react-native';
import RootStore from '../root/Store';
import {useStore} from 'mobx-store-provider';
import {observer} from 'mobx-react-lite';
import TaskListCellView from '../taskListCell/View';
import SafeAreaView from '../components/SafeAreaView';

const headerRight = self => {
	return () => (
		<TouchableOpacity onPress={self.addNewTask}>
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

	return (
		<SafeAreaView>
			<FlatList
				data={self.taskStores.slice()}
				renderItem={renderItem}
				keyExtractor={keyExtractor}
			/>
		</SafeAreaView>
	);
};

export default observer(TaskListView);
