import * as taskList from '../taskList/env';

const combined = isOnline => {
  return {
    isOnline: isOnline,
    taskList: taskList.current(isOnline),
  };
};

export default combined;
