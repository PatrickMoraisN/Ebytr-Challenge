const initialState = {
  tasks: [],
};

const TaskReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'ADD_TASKS':
      return { tasks: action.payload.tasks.allTasks };
    default:
      return state;
  }
};

export default TaskReducer;
