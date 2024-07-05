import {getEnv, flow, types} from 'mobx-state-tree';
import TaskListCellStore from '../taskListCell/Store';
import TaskDetailStore from '../taskDetail/Store';
import Navigation from '../app/Navigation';

let taskCount = 0;

const TaskListStore = types
  .model({
    taskStores: types.array(TaskListCellStore),
    taskDetailStore: types.maybe(TaskDetailStore),
    requestState: String('init'),
    error: String(''),
  })
  .actions(self => ({
    request: flow(function* request() {
      try {
        self.requestState = 'loading';
        const {taskStores} = yield getEnv(self).taskList.request();
        self.taskStores = taskStores;
        self.requestState = 'done';
      } catch (error) {
        console.log('error=', error);
        self.requestState = 'error';
        self.error = error;
      }
    }),
    addNewTask() {
      const task = TaskListCellStore.create({
        id: taskCount,
        text: `task ${taskCount}`,
      });
      taskCount++;
      self.taskStores.push(task);
      console.log('self.taskStores=', self.taskStores);
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
