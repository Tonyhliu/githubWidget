import React from 'react';
// import UserItem from './user_item';

class UserList extends React.Component {
  componentDidMount() {
    // const { requestUsers } = this.props;
    // requestUsers();
  }

  render() {
    // const { todos, state, receiveTodos, receiveTodo } = this.props;
    // const todoItems = todos.map((todo, idx) => (
    //   <TodoListItem key={idx}
    //                 todo={todo}
    //                 receiveTodo={receiveTodo} />
    // ));
    // { todoItems }
    const { users, state } = this.props;
    // console.log(this.props);
    // console.log('hey');

    const userItems = users.map((user, idx) => {
        return(<li key={idx}>{user.username}</li>);
    });

    return (
      <div>
        <ul>
          { userItems }
        </ul>
      </div>
    );
  }
}

export default UserList;
