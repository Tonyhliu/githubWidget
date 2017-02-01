import React from 'react';
import UserItem from './user_item';

class UserList extends React.Component {
  constructor(props) {
    super(props);

    this.refresh = this.refresh.bind(this);
  }

  componentDidMount() {
    const { requestUsers } = this.props;
    requestUsers();
  }

  refresh() {
    const { refreshAllUsers } = this.props;
    refreshAllUsers();
  }

  render() {
    const { users, state, removeUser } = this.props;

    return (
      <div className='content-container'>
        <div className='flex-container'>
          <h3 className='follow'>Who to follow</h3>
          <small className='separator'>·</small>
          <small className='refresh-btn'
                  onClick={this.refresh}>Refresh</small>
          <small className='separator'>·</small>
          <small className='viewAll-btn'>View all</small>
        </div>
        <ul className='users-ul'>
          {users.map((user, idx) => {
            return (
              <UserItem key={idx}
                        user={user}
                        removeUser={removeUser} />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default UserList;
