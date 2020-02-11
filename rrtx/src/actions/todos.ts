import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';
import { FetchTodosAction, DeleteTodoAction, Todo } from './index';

export const fetchTodos = () => {
  return (dispatch: Dispatch) => {
    axios
      .get<Todo[]>(`https://jsonplaceholder.typicode.com/todos/`)
      .then(response => {
        dispatch<FetchTodosAction>({
          type: ActionTypes.fetchTodos,
          payload: response.data
        });
      })
      .catch(error => {
        console.log(error.message);
      });
  };
};

export const deleteTodo = (id: number): DeleteTodoAction => {
  return {
    type: ActionTypes.deleteTodo,
    payload: id
  };
};
