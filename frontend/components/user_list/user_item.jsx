import React from 'react';
import { Button } from 'react-bootstrap';

class UserItem extends React.Component {
  constructor(props) {
    super(props);

    this.removeSingleUser = this.removeSingleUser.bind(this);
  }

  removeSingleUser(user) {
    return () => {
      const { removeUser } = this.props;
      removeUser(user);
    };
  }

  render() {
    const { user, removeUser } = this.props;

    return (
      <li className='user-content'>
        <div className='img-container'>
          <img className='user-avatar'
            src={user.avatar_url}>
          </img>
        </div>
        <div className='main-content'>
          <span className='user-realname'>
            <a href={user.html_url}>
              {user.name}
            </a>
          </span>
          <span className='username'>
            @{user.login}
          </span>
        </div>
        <div className='user-btn-container'>
          <Button className='requestUser-btn'
            bsSize='xsmall'
            onClick={this.removeSingleUser(user)}><span id='close'>X</span></Button>
        </div>
        <div className='profile-btn-container'>
          <Button bsSize='xs'
                href={user.html_url}>Profile</Button>
        </div>
      </li>
    );
  }
}

export default UserItem;
