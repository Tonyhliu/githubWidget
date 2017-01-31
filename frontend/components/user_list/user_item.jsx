import React from 'react';

class UserItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user } = this.props;
    console.log(user);
    return (
      <div className='user-content'>
        <img src={user.avatar_url}></img>
      </div>
    );
  }
}

export default UserItem;
