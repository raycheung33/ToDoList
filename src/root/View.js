import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {observer} from 'mobx-react-lite';
import Stack from '../app/Stack';
import TaskListView from '../taskList/View';
import TaskDetailView from '../taskDetail/View';
import Navigation from '../app/Navigation';

const RootView = () => {
	return (
		<SafeAreaProvider>
			<NavigationContainer ref={Navigation.ref}>
				<Stack.Navigator>
					<Stack.Group>
						<Stack.Screen name={'TaskListView'} component={TaskListView} />
						<Stack.Screen name={'TaskDetailView'} component={TaskDetailView} />
					</Stack.Group>
				</Stack.Navigator>
			</NavigationContainer>
		</SafeAreaProvider>
	);
};

export default observer(RootView);
