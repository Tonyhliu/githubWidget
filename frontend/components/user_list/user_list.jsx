import React from 'react';
import UserItem from './user_item';

class UserList extends React.Component {
  componentDidMount() {
    const { requestUsers } = this.props;
    requestUsers();
  }

  render() {
    const { users, state } = this.props;
    // console.log(this.props);
    // console.log('hey');

    return (
      <div className='content'>
        <ul>
          {users.map((user, idx) => {
            return (
              <li key={idx} className='user-li'>
                <UserItem user={user}/>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default UserList;
