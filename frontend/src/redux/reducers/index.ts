import { combineReducers } from 'redux';
import TaskReducer from './TaskReducer';

export const rootReducer = combineReducers({
  TaskReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
