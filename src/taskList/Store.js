import {types} from 'mobx-state-tree';
import TaskListCellStore from '../taskListCell/Store';
import TaskDetailStore from '../taskDetail/Store';
import Navigation from '../app/Navigation';

let taskCount = 0;

const TaskListStore = types
	.model({
		taskStores: types.array(TaskListCellStore),
		taskDetailStore: types.maybe(TaskDetailStore),
	})
	.actions(self => ({
		addNewTask() {
			const task = TaskListCellStore.create({
				id: taskCount,
				text: `task ${taskCount}`,
			});
			taskCount++;
			self.taskStores.push(task);
		},
		showDetailView(task) {
			const taskDetailStore = TaskDetailStore.create({
				id: task.id,
				text: task.text,
			});
			self.taskDetailStore = taskDetailStore;
			Navigation.goTo('TaskDetailView', {self: taskDetailStore});
		},
	}));

export default TaskListStore;
