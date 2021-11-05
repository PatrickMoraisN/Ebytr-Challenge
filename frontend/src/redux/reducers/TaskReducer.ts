import { ADD_TASKS_ACTION } from '../actions';

const initialState = {
  tasks: [],
};

const TaskReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TASKS_ACTION:
      return { tasks: action.payload.tasks.allTasks };
    default:
      return state;
  }
};

export default TaskReducer;
