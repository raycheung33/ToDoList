import {types} from 'mobx-state-tree';

const TaskDetailStore = types
	.model({
		id: types.number,
		text: types.optional(types.string, ''),
	})
	.actions(self => ({
		doSomething() {},
	}));

export default TaskDetailStore;
