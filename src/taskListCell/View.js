import React from 'react';
import {View, Text} from 'react-native';
import {observer} from 'mobx-react-lite';

const TaskListCellView = ({route, navigation}) => {
	const self = route.params.self;
	return (
		<View
			style={{
				flexDirection: 'row',
				justifyContent: 'space-between',
				gap: 20,
				padding: 20,
			}}>
			<Text>{self.text}</Text>
			<Text>></Text>
		</View>
	);
};

export default observer(TaskListCellView);
