import {types} from 'mobx-state-tree';
import TaskListStore from '../taskList/Store';

const RootStore = types
	.model({
		taskListStore: types.optional(TaskListStore, {}),
	})
	.actions(self => ({
		doSomething() {},
	}));

export default RootStore;
