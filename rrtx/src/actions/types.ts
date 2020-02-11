import { DeleteTodoAction, FetchTodosAction } from './interfaces';

export enum ActionTypes {
  fetchTodos = 'FETCH_TODOS_FROM_FAKE_API',
  deleteTodo = 'DELETE_TODO'
}

export type Action = FetchTodosAction | DeleteTodoAction;
