import React from 'react';
import { Button, Fade } from 'react-bootstrap';

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
    const { user, removeUser, loading, state } = this.props;

    return (
      <li className='user-content'>
        <div className='img-container'>
          <img className='user-avatar'
            src={user.avatar_url}>
          </img>
        </div>
        <div className='main-content'>
          <span className='user-realname'>
            <a href={user.html_url}
              className='user-realname-link'>
              {user.name}
            </a>
            <span className='username'>
              @{user.login}
            </span>
          </span>
        </div>
        <div className='user-btn-container'>
          <Button className='requestUser-btn'
            bsSize='xs'
            bsClass='btn'
            disabled={loading}
            onClick={!loading ? this.removeSingleUser(user) : null}>X</Button>
        </div>
        <div className='profile-btn-container'>
          <Button bsSize='xs'
                href={user.html_url}>
                <i className="fa fa-github fa-lg github-icon" aria-hidden="true">
                  <span className='profile-span'>Profile</span>
                </i>
              </Button>
        </div>
      </li>
    );
  }
}

export default UserItem;
