import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodo } from '../actions';
import { StoreState } from '../reducers';

interface Props {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

interface AppState {
  fetching: boolean;
}

class App extends Component<Props, AppState> {
  constructor(props: Props) {
    super(props);
    this.state = { fetching: false };
  }

  componentDidMount() {}

  componentDidUpdate(prevProps: Props) {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: false });
    }
  }
  onButtonClick = (): void => {
    this.setState({ fetching: true });
    this.props.fetchTodos();
  };

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo, index: number) => {
      return (
        <div
          key={`todo-${index}`}
          onClick={() => {
            this.props.deleteTodo(todo.id);
          }}
        >
          {todo.title}
        </div>
      );
    });
  }

  render() {
    console.log(this.props.todos);
    return (
      <div>
        <button onClick={this.onButtonClick}> Fetch! </button>
        <div>{this.state.fetching ? 'Loading...' : null}</div>
        <div>{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
  return { todos: state.todos };
};

export default connect(mapStateToProps, { fetchTodos, deleteTodo })(App);
