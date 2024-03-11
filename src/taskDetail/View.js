import React from 'react';
import {View, Text} from 'react-native';
import {observer} from 'mobx-react-lite';

const TaskDetailView = ({route, navigation}) => {
	const {self} = route.params;
	return (
		<View
			style={{
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center',
				padding: 20,
				gap: 20,
			}}>
			<Text>{self.text}</Text>
			<Text>This is the detail view</Text>
		</View>
	);
};

export default observer(TaskDetailView);
