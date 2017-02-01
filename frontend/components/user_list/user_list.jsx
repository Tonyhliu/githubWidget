import React from 'react';
import UserItem from './user_item';

class UserList extends React.Component {
  constructor(props) {
    super(props);

    this.refresh = this.refresh.bind(this);
  }

  componentDidMount() {
    const { requestUsers, requestLocation } = this.props;
    // navigator.permissions.query({name:'geolocation'})
    // .then(function(permissionStatus) {
    //   console.log('geolocation permission state is ', permissionStatus.state);
    //   requestLocation();
    //
    //   permissionStatus.onchange = function() {
    //     console.log('geolocation permission state has changed to ', this.state);
    //   };
    // });
    requestUsers();
  }

  refresh() {
    const { refreshAllUsers, isLoading } = this.props;
    isLoading();
    refreshAllUsers();
  }

  render() {
    const { users, state, removeUser, isLoading, location } = this.props;
    // console.log(state);
    // console.log(location);

    if (state.loading) {
        return (
          <div className='content-container'>
            <div className="loader"></div>
          </div>
        );
      }
    if (state.errors) {
      return (
        <li className='content-container error-container'>
          <div>{state.errors[0]}</div>
        </li>
      );
    }

    return (
      <div className='content-container'>
        <div className='flex-container'>
                <h3 className='follow'>Who to follow</h3>
                <div className='btns'>
                  <small className='separator'>·</small>
                  <small className='refresh-btn'
                    onClick={this.refresh}>Refresh</small>
                  <small className='separator'>·</small>
                  <small className='viewAll-btn'>View all</small>
                </div>
        </div>
          <ul className='users-ul'>
            {users.map((user, idx) => {
              return (
                <UserItem key={idx}
                          state={state}
                          user={user}
                          removeUser={removeUser}
                          isLoading={isLoading}
                          errors={state.errors} />
              );
            })}
          </ul>
          <div className='last-container'>
            {location ? <span>Showing users in {location} </span> : <span> Showing users in City, State </span>}
          </div>
      </div>

    );
  }
}

export default UserList;
